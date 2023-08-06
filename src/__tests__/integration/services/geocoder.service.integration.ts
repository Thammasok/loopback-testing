/* eslint-disable mocha/handle-done-callback */

import {expect} from '@loopback/testlab';
import {GeocoderDataSource} from '../../../datasources';
import {Geocoder, GeocoderProvider} from '../../../services';
import {
  HttpCachingProxy,
  aLocation,
  getProxiedGeoCoderConfig,
  givenCachingProxy,
  isGeoCoderServiceAvailable,
} from '../../helpers';

describe('GeoLookupService', function (this: Mocha.Suite) {
  this.timeout(30 * 1000);

  let cachingProxy: HttpCachingProxy;
  before(async () => (cachingProxy = await givenCachingProxy()));
  after(() => cachingProxy.stop());

  let service: Geocoder;
  before(givenGeoService);

  let available = true;
  before(async () => {
    available = await isGeoCoderServiceAvailable(service);
  });

  it('resolves an address to a geo point', async function (this: Mocha.Context) {
    if (!available) return this.skip();

    const points = await service.geocode(aLocation.address);

    expect(points).to.deepEqual([aLocation.geopoint]);
  });

  async function givenGeoService() {
    const config = getProxiedGeoCoderConfig(cachingProxy);
    const dataSource = new GeocoderDataSource(config);
    service = await new GeocoderProvider(dataSource).value();
  }
});
