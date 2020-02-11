import { Utility } from '@rlean/core';

class DemoUtility extends Utility {
  get postPath() {
    return '/path';
  }

  get apiUriOverride() {
    return 'https://uri-to-third-party-api';
  }
}

export default new DemoUtility();
