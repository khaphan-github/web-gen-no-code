import { LOCALSTORAGE_STORAGED_KEY } from './../../../core/config/storage-key/localstorage.const';

export const apiPathBuilder = (endpoint: string) => {
  const domain = localStorage.getItem(LOCALSTORAGE_STORAGED_KEY.modules.manageApi.connection.hostName);
  return `${domain}/api/v1/app/9999/schema${endpoint}`
}
