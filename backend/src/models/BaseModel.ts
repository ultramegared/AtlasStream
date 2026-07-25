export default class BaseModel {
  constructor(data: Record<string, any> = {}) {
    Object.assign(this, data);
  }
}