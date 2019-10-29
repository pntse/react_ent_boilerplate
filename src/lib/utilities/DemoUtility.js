import { Utility } from '@react-ent/core';

export class DemoUtility extends Utility {
  get postPath() {
    return '/path';
  }

  get apiUriOverride() {
    return 'https://uri-to-third-party-api';
  }
}
