import React, { useState, useEffect, useRef } from 'react';
import { Popover, Button, Drawer, Empty } from 'antd';
import classname from 'classname';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Content from '@/components/Content';
import { useHtmlWidth, useScrollLoad } from '@/hooks';
import useStore from '@/store';
import * as Service from '@/service';
import { normalizeResult, error, formatGapTime } from '@/utils';
import { PAGESIZE, DRAWER_STYLES } from '@/constant';
import { ArticleListResult, ArticleItem } from '@/typings/common';
import styles from './index.less';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  deleteDraft?: (id?: string, needMessage?: boolean) => void;
  drawerVisible?: boolean;
  hideDraftDrawer?: Function;
  themeMode?: string;
}

const DraftPopover: React.FC<IProps> = ({
  deleteDraft,
  drawerVisible,
  hideDraftDrawer,
  themeMode,
}) => {
  const [draftList, setDraftList] = useState<ArticleListResult>({
    list: [],
    total: 0,
    count: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const listRef = useRef<ArticleItem[]>([]);
  const navigate = useNavigate();
  const {
    userInfoStore: { getUserInfo },
  } = useStore();
  // scrollRef：用户设置rightbar的吸顶效果，scrollbarRef：scrollbar 滚动到顶部，scrollTop：回到顶部
  const { pageNo, setPageNo, onScroll } = useScrollLoad({
    data: draftList,
    loading,
    pageSize: PAGESIZE,
    scrollStyle: styles.scrollStyle,
  });

  const { htmlWidth } = useHtmlWidth();

  useEffect(() => {
    if (visible || drawerVisible) {
      getDraftList();
    }
  }, [pageNo, visible, drawerVisible]);

  useEffect(() => {
    setPageNo(1);
    listRef.current = [];
    setDraftList({
      list: listRef.current,
      total: 0,
      count: 0,
    });
  }, [drawerVisible]);

  // 获取文章列表
  const getDraftList = async () => {
    setLoading(true);
    const res = normalizeResult<ArticleListResult>(
      await Service.getDraftList({
        pageNo,
        pageSize: PAGESIZE,
        userId: getUserInfo?.userId,
      })
    );
    setLoading(false);
    if (res.success) {
      const { total, list } = res.data;
      // 使用ref暂存list，防止滚动加载时，list添加错乱问题
      listRef.current = [...listRef.current, ...list];
      setDraftList({
        list: listRef.current,
        total,
        count: list.length,
      });
    } else {
      error(res.message);
    }
  };

  // Popover onVisibleChange 事件
  const onVisibleChange = (visible: boolean) => {
    setVisible(visible);
    setPageNo(1);
    listRef.current = [];
    setDraftList({
      list: listRef.current,
      total: 0,
      count: 0,
    });
  };

  // 预览
  const onPreview = (item: ArticleItem) => {
    navigate(`/detail/${item.id}?draft=1`);
  };

  // 编辑
  const onEditDraft = (item: ArticleItem) => {
    navigate(`/create?draftId=${item.id}`);
    setVisible(false);
    hideDraftDrawer && hideDraftDrawer();
  };

  // 删除
  const onDelDraft = (item: ArticleItem) => {
    const list = draftList.list.filter((i) => i.id !== item.id);
    setDraftList({
      ...draftList,
      total: draftList.total - 1,
      list,
    });
    deleteDraft && deleteDraft(item.id, true);
  };

  const content = (
    <div className={classname(styles.draftContent, themeMode === 'dark' && styles.dark)}>
      {draftList?.list?.length > 0 ? (
        <Content
          containerClassName={styles.containerClassName}
          wrapClassName={styles.wrapClassName}
          className={styles.scrollWrap}
          autoHeight
          autoHeightMax="260px"
          onScroll={onScroll}
          themeMode={themeMode}
        >
          {draftList?.list?.map((i) => {
            return (
              <div key={i.id} className={styles.draftItem}>
                <span className={styles.title}>
                  {i.title ||
                    `${i.content?.slice(0, 26).replace(/#/g, '')}${
                      i.content && i.content.slice(0, 26).length > 20 ? '...' : ''
                    }`}
                </span>
                <span className={styles.actions}>
                  <span className={styles.createTime}>{formatGapTime(i.createTime)}</span>
                  <Button
                    className={styles.preBtn}
                    type="link"
                    onClick={() => onPreview(i)}
                  >
                    预览
                  </Button>
                  <Button
                    className={styles.editBtn}
                    type="link"
                    onClick={() => onEditDraft(i)}
                  >
                    编辑
                  </Button>
                  <Button
                    className={styles.delBtn}
                    type="link"
                    onClick={() => onDelDraft(i)}
                  >
                    删除
                  </Button>
                </span>
              </div>
            );
          })}
          {!loading && draftList?.list?.length === draftList?.total ? (
            <div className={styles.noMore}>
              {`共(${draftList?.list?.length})条，没有更多了～～～`}
            </div>
          ) : (
            <div className={styles.noMore}>loading...</div>
          )}
        </Content>
      ) : (
        <div className={styles.draftEmpty}>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={<div className={styles.empty}>空空如也</div>}
          />
        </div>
      )}
    </div>
  );

  const title = (
    <div
      className={classname(
        styles.modalTitle,
        themeMode === 'dark' && styles.darkModalTitle
      )}
    >
      草稿列表
    </div>
  );

  return htmlWidth > 960 ? (
    <Popover
      placement="bottomRight"
      title={title}
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={onVisibleChange}
      overlayClassName={
        themeMode === 'dark' ? styles.darkOverlayClassName : styles.overlayClassName
      }
    >
      <Button type="link" className={styles.draftBtn}>
        草稿箱
      </Button>
    </Popover>
  ) : (
    <Drawer
      title={<div className={themeMode === 'dark' ? styles.drawerTitle : ''}>草稿列表</div>}
      key="top"
      placement="top"
      closable={false}
      visible={drawerVisible}
      headerStyle={
        themeMode === 'dark'
          ? { padding: '16px 10px', borderRadius: '0', ...DRAWER_STYLES.headerStyle }
          : { padding: '16px 10px', borderRadius: '0' }
      }
      bodyStyle={
        themeMode === 'dark'
          ? { padding: '10px 0 10px 10px', ...DRAWER_STYLES.bodyStyle }
          : { padding: '10px 0 10px 10px' }
      }
      height={340}
      onClose={() => {
        hideDraftDrawer && hideDraftDrawer();
      }}
      extra={
        <div
          onClick={() => {
            hideDraftDrawer && hideDraftDrawer();
          }}
        >
          <CloseOutlined />
        </div>
      }
    >
      {content}
    </Drawer>
  );
};

export default DraftPopover;
