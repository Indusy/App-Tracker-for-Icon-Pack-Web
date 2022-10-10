import type { searchType } from '@/types/app-info';
import { axios } from '@/shared/axios';

export const appInfoApis = {
  async getAppInfo(keyword: string, type?: searchType) {
    let payload = {};
    switch (type) {
      case 'normal':
        payload = {
          q: keyword,
        };
        break;
      case 'regex':
        payload = {
          regex: keyword,
        };
        break;
      case 'view':
        break;
      default:
        payload = {
          q: keyword,
        };
    }

    return await axios.get('/api/appInfo', payload);
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async getAppInfoBySignature() {},
};
