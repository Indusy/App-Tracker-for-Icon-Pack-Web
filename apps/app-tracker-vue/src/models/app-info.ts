export interface AppInfoEntityModel {
  items: AppInfoItemModel[];
  meta: AppInfoMetaModel;
}

/**
 * AppInfoItemModel
 */
export interface AppInfoItemModel {
  activityName: string;
  appName: string;
  packageName: string;
  id: string;
  count: number;
  signature: string;
}

/**
 * AppInfoMetaModel
 */
export interface AppInfoMetaModel {
  page: number;
  per: number;
  total: string;
}
