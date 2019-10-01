/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { InfoReservationDto } from '../models/info-reservation-dto';

/**
 * Reservation Controller
 */
@Injectable({
  providedIn: 'root',
})
class ReservationControllerService extends __BaseService {
  static readonly addUsingPOST1Path = '/reservations';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ReservationControllerService.AddUsingPOST1Params` containing the following parameters:
   *
   * - `url.userInfo`:
   *
   * - `url.schemeSpecificPart`:
   *
   * - `url.scheme`:
   *
   * - `url.rawUserInfo`:
   *
   * - `url.rawSchemeSpecificPart`:
   *
   * - `url.rawQuery`:
   *
   * - `url.rawPath`:
   *
   * - `url.rawFragment`:
   *
   * - `url.rawAuthority`:
   *
   * - `url.query`:
   *
   * - `url.port`:
   *
   * - `url.path`:
   *
   * - `url.opaque`:
   *
   * - `url.host`:
   *
   * - `url.fragment`:
   *
   * - `url.authority`:
   *
   * - `url.absolute`:
   *
   * - `type`:
   *
   * - `method`:
   *
   * - `headers.vary`:
   *
   * - `headers.upgrade`:
   *
   * - `headers.pragma`:
   *
   * - `headers.origin`:
   *
   * - `headers.location.userInfo`:
   *
   * - `headers.location.schemeSpecificPart`:
   *
   * - `headers.location.scheme`:
   *
   * - `headers.location.rawUserInfo`:
   *
   * - `headers.location.rawSchemeSpecificPart`:
   *
   * - `headers.location.rawQuery`:
   *
   * - `headers.location.rawPath`:
   *
   * - `headers.location.rawFragment`:
   *
   * - `headers.location.rawAuthority`:
   *
   * - `headers.location.query`:
   *
   * - `headers.location.port`:
   *
   * - `headers.location.path`:
   *
   * - `headers.location.opaque`:
   *
   * - `headers.location.host`:
   *
   * - `headers.location.fragment`:
   *
   * - `headers.location.authority`:
   *
   * - `headers.location.absolute`:
   *
   * - `headers.lastModified`:
   *
   * - `headers.ifUnmodifiedSince`:
   *
   * - `headers.ifNoneMatch`:
   *
   * - `headers.ifModifiedSince`:
   *
   * - `headers.ifMatch`:
   *
   * - `headers.host.unresolved`:
   *
   * - `headers.host.port`:
   *
   * - `headers.host.hostString`:
   *
   * - `headers.host.hostName`:
   *
   * - `headers.host.address.siteLocalAddress`:
   *
   * - `headers.host.address.multicastAddress`:
   *
   * - `headers.host.address.loopbackAddress`:
   *
   * - `headers.host.address.linkLocalAddress`:
   *
   * - `headers.host.address.hostName`:
   *
   * - `headers.host.address.hostAddress`:
   *
   * - `headers.host.address.canonicalHostName`:
   *
   * - `headers.host.address.anyLocalAddress`:
   *
   * - `headers.host.address.address`:
   *
   * - `headers.host.address.MCSiteLocal`:
   *
   * - `headers.host.address.MCOrgLocal`:
   *
   * - `headers.host.address.MCNodeLocal`:
   *
   * - `headers.host.address.MCLinkLocal`:
   *
   * - `headers.host.address.MCGlobal`:
   *
   * - `headers.expires`:
   *
   * - `headers.date`:
   *
   * - `headers.contentType.wildcardType`:
   *
   * - `headers.contentType.wildcardSubtype`:
   *
   * - `headers.contentType.type`:
   *
   * - `headers.contentType.subtype`:
   *
   * - `headers.contentType.qualityValue`:
   *
   * - `headers.contentType.concrete`:
   *
   * - `headers.contentType.charset.registered`:
   *
   * - `headers.contentLength`:
   *
   * - `headers.contentLanguage.variant`:
   *
   * - `headers.contentLanguage.unicodeLocaleKeys`:
   *
   * - `headers.contentLanguage.unicodeLocaleAttributes`:
   *
   * - `headers.contentLanguage.script`:
   *
   * - `headers.contentLanguage.language`:
   *
   * - `headers.contentLanguage.displayVariant`:
   *
   * - `headers.contentLanguage.displayScript`:
   *
   * - `headers.contentLanguage.displayName`:
   *
   * - `headers.contentLanguage.displayLanguage`:
   *
   * - `headers.contentLanguage.displayCountry`:
   *
   * - `headers.contentLanguage.country`:
   *
   * - `headers.contentLanguage.ISO3Language`:
   *
   * - `headers.contentLanguage.ISO3Country`:
   *
   * - `headers.contentDisposition.type`:
   *
   * - `headers.contentDisposition.size`:
   *
   * - `headers.contentDisposition.readDate`:
   *
   * - `headers.contentDisposition.name`:
   *
   * - `headers.contentDisposition.modificationDate`:
   *
   * - `headers.contentDisposition.filename`:
   *
   * - `headers.contentDisposition.creationDate`:
   *
   * - `headers.contentDisposition.charset.registered`:
   *
   * - `headers.connection`:
   *
   * - `headers.cacheControl`:
   *
   * - `headers.allow`:
   *
   * - `headers.accessControlRequestMethod`:
   *
   * - `headers.accessControlRequestHeaders`:
   *
   * - `headers.accessControlMaxAge`:
   *
   * - `headers.accessControlExposeHeaders`:
   *
   * - `headers.accessControlAllowOrigin`:
   *
   * - `headers.accessControlAllowMethods`:
   *
   * - `headers.accessControlAllowHeaders`:
   *
   * - `headers.accessControlAllowCredentials`:
   *
   * - `headers.accept[0].wildcardType`:
   *
   * - `headers.accept[0].wildcardSubtype`:
   *
   * - `headers.accept[0].type`:
   *
   * - `headers.accept[0].subtype`:
   *
   * - `headers.accept[0].qualityValue`:
   *
   * - `headers.accept[0].concrete`:
   *
   * - `headers.accept[0].charset.registered`:
   *
   * - `headers.acceptLanguage[0].weight`:
   *
   * - `headers.acceptLanguage[0].range`:
   *
   * - `headers.acceptLanguageAsLocales[0].variant`:
   *
   * - `headers.acceptLanguageAsLocales[0].unicodeLocaleKeys`:
   *
   * - `headers.acceptLanguageAsLocales[0].unicodeLocaleAttributes`:
   *
   * - `headers.acceptLanguageAsLocales[0].script`:
   *
   * - `headers.acceptLanguageAsLocales[0].language`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayVariant`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayScript`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayName`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayLanguage`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayCountry`:
   *
   * - `headers.acceptLanguageAsLocales[0].country`:
   *
   * - `headers.acceptLanguageAsLocales[0].ISO3Language`:
   *
   * - `headers.acceptLanguageAsLocales[0].ISO3Country`:
   *
   * - `headers.acceptCharset[0].registered`:
   *
   * - `headers.ETag`:
   *
   * - `body.user.username`:
   *
   * - `body.user.surname`:
   *
   * - `body.user.seansDto.seatCount`:
   *
   * - `body.user.seansDto.rowNumber`:
   *
   * - `body.user.seansDto.roomNumber`:
   *
   * - `body.user.seansDto.id`:
   *
   * - `body.user.roles`:
   *
   * - `body.user.reviewDto.id`:
   *
   * - `body.user.passwordConfirmation`:
   *
   * - `body.user.password`:
   *
   * - `body.user.name`:
   *
   * - `body.user.loyaltyCardDto.price`:
   *
   * - `body.user.loyaltyCardDto.maxTicket`:
   *
   * - `body.user.loyaltyCardDto.id`:
   *
   * - `body.user.loyaltyCardDto.expirationDate`:
   *
   * - `body.user.loyaltyCardDto.discount`:
   *
   * - `body.user.id`:
   *
   * - `body.user.email`:
   *
   * - `body.user.age`:
   *
   * - `body.movie.title`:
   *
   * - `body.movie.releaseDate`:
   *
   * - `body.movie.price`:
   *
   * - `body.movie.id`:
   *
   * - `body.movie.genre`:
   *
   * - `body.movie.duration`:
   *
   * - `body.movie.description`:
   *
   * - `body.id`:
   *
   * @return OK
   */
  addUsingPOST1Response(params: ReservationControllerService.AddUsingPOST1Params): __Observable<__StrictHttpResponse<InfoReservationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.urlUserInfo != null) __params = __params.set('url.userInfo', params.urlUserInfo.toString());
    if (params.urlSchemeSpecificPart != null) __params = __params.set('url.schemeSpecificPart', params.urlSchemeSpecificPart.toString());
    if (params.urlScheme != null) __params = __params.set('url.scheme', params.urlScheme.toString());
    if (params.urlRawUserInfo != null) __params = __params.set('url.rawUserInfo', params.urlRawUserInfo.toString());
    if (params.urlRawSchemeSpecificPart != null) __params = __params.set('url.rawSchemeSpecificPart', params.urlRawSchemeSpecificPart.toString());
    if (params.urlRawQuery != null) __params = __params.set('url.rawQuery', params.urlRawQuery.toString());
    if (params.urlRawPath != null) __params = __params.set('url.rawPath', params.urlRawPath.toString());
    if (params.urlRawFragment != null) __params = __params.set('url.rawFragment', params.urlRawFragment.toString());
    if (params.urlRawAuthority != null) __params = __params.set('url.rawAuthority', params.urlRawAuthority.toString());
    if (params.urlQuery != null) __params = __params.set('url.query', params.urlQuery.toString());
    if (params.urlPort != null) __params = __params.set('url.port', params.urlPort.toString());
    if (params.urlPath != null) __params = __params.set('url.path', params.urlPath.toString());
    if (params.urlOpaque != null) __params = __params.set('url.opaque', params.urlOpaque.toString());
    if (params.urlHost != null) __params = __params.set('url.host', params.urlHost.toString());
    if (params.urlFragment != null) __params = __params.set('url.fragment', params.urlFragment.toString());
    if (params.urlAuthority != null) __params = __params.set('url.authority', params.urlAuthority.toString());
    if (params.urlAbsolute != null) __params = __params.set('url.absolute', params.urlAbsolute.toString());
    if (params.type != null) __params = __params.set('type', params.type.toString());
    if (params.method != null) __params = __params.set('method', params.method.toString());
    (params.headersVary || []).forEach(val => {if (val != null) __params = __params.append('headers.vary', val.toString())});
    if (params.headersUpgrade != null) __params = __params.set('headers.upgrade', params.headersUpgrade.toString());
    if (params.headersPragma != null) __params = __params.set('headers.pragma', params.headersPragma.toString());
    if (params.headersOrigin != null) __params = __params.set('headers.origin', params.headersOrigin.toString());
    if (params.headersLocationUserInfo != null) __params = __params.set('headers.location.userInfo', params.headersLocationUserInfo.toString());
    if (params.headersLocationSchemeSpecificPart != null) __params = __params.set('headers.location.schemeSpecificPart', params.headersLocationSchemeSpecificPart.toString());
    if (params.headersLocationScheme != null) __params = __params.set('headers.location.scheme', params.headersLocationScheme.toString());
    if (params.headersLocationRawUserInfo != null) __params = __params.set('headers.location.rawUserInfo', params.headersLocationRawUserInfo.toString());
    if (params.headersLocationRawSchemeSpecificPart != null) __params = __params.set('headers.location.rawSchemeSpecificPart', params.headersLocationRawSchemeSpecificPart.toString());
    if (params.headersLocationRawQuery != null) __params = __params.set('headers.location.rawQuery', params.headersLocationRawQuery.toString());
    if (params.headersLocationRawPath != null) __params = __params.set('headers.location.rawPath', params.headersLocationRawPath.toString());
    if (params.headersLocationRawFragment != null) __params = __params.set('headers.location.rawFragment', params.headersLocationRawFragment.toString());
    if (params.headersLocationRawAuthority != null) __params = __params.set('headers.location.rawAuthority', params.headersLocationRawAuthority.toString());
    if (params.headersLocationQuery != null) __params = __params.set('headers.location.query', params.headersLocationQuery.toString());
    if (params.headersLocationPort != null) __params = __params.set('headers.location.port', params.headersLocationPort.toString());
    if (params.headersLocationPath != null) __params = __params.set('headers.location.path', params.headersLocationPath.toString());
    if (params.headersLocationOpaque != null) __params = __params.set('headers.location.opaque', params.headersLocationOpaque.toString());
    if (params.headersLocationHost != null) __params = __params.set('headers.location.host', params.headersLocationHost.toString());
    if (params.headersLocationFragment != null) __params = __params.set('headers.location.fragment', params.headersLocationFragment.toString());
    if (params.headersLocationAuthority != null) __params = __params.set('headers.location.authority', params.headersLocationAuthority.toString());
    if (params.headersLocationAbsolute != null) __params = __params.set('headers.location.absolute', params.headersLocationAbsolute.toString());
    if (params.headersLastModified != null) __params = __params.set('headers.lastModified', params.headersLastModified.toString());
    if (params.headersIfUnmodifiedSince != null) __params = __params.set('headers.ifUnmodifiedSince', params.headersIfUnmodifiedSince.toString());
    (params.headersIfNoneMatch || []).forEach(val => {if (val != null) __params = __params.append('headers.ifNoneMatch', val.toString())});
    if (params.headersIfModifiedSince != null) __params = __params.set('headers.ifModifiedSince', params.headersIfModifiedSince.toString());
    (params.headersIfMatch || []).forEach(val => {if (val != null) __params = __params.append('headers.ifMatch', val.toString())});
    if (params.headersHostUnresolved != null) __params = __params.set('headers.host.unresolved', params.headersHostUnresolved.toString());
    if (params.headersHostPort != null) __params = __params.set('headers.host.port', params.headersHostPort.toString());
    if (params.headersHostHostString != null) __params = __params.set('headers.host.hostString', params.headersHostHostString.toString());
    if (params.headersHostHostName != null) __params = __params.set('headers.host.hostName', params.headersHostHostName.toString());
    if (params.headersHostAddressSiteLocalAddress != null) __params = __params.set('headers.host.address.siteLocalAddress', params.headersHostAddressSiteLocalAddress.toString());
    if (params.headersHostAddressMulticastAddress != null) __params = __params.set('headers.host.address.multicastAddress', params.headersHostAddressMulticastAddress.toString());
    if (params.headersHostAddressLoopbackAddress != null) __params = __params.set('headers.host.address.loopbackAddress', params.headersHostAddressLoopbackAddress.toString());
    if (params.headersHostAddressLinkLocalAddress != null) __params = __params.set('headers.host.address.linkLocalAddress', params.headersHostAddressLinkLocalAddress.toString());
    if (params.headersHostAddressHostName != null) __params = __params.set('headers.host.address.hostName', params.headersHostAddressHostName.toString());
    if (params.headersHostAddressHostAddress != null) __params = __params.set('headers.host.address.hostAddress', params.headersHostAddressHostAddress.toString());
    if (params.headersHostAddressCanonicalHostName != null) __params = __params.set('headers.host.address.canonicalHostName', params.headersHostAddressCanonicalHostName.toString());
    if (params.headersHostAddressAnyLocalAddress != null) __params = __params.set('headers.host.address.anyLocalAddress', params.headersHostAddressAnyLocalAddress.toString());
    if (params.headersHostAddressAddress != null) __params = __params.set('headers.host.address.address', params.headersHostAddressAddress.toString());
    if (params.headersHostAddressMCSiteLocal != null) __params = __params.set('headers.host.address.MCSiteLocal', params.headersHostAddressMCSiteLocal.toString());
    if (params.headersHostAddressMCOrgLocal != null) __params = __params.set('headers.host.address.MCOrgLocal', params.headersHostAddressMCOrgLocal.toString());
    if (params.headersHostAddressMCNodeLocal != null) __params = __params.set('headers.host.address.MCNodeLocal', params.headersHostAddressMCNodeLocal.toString());
    if (params.headersHostAddressMCLinkLocal != null) __params = __params.set('headers.host.address.MCLinkLocal', params.headersHostAddressMCLinkLocal.toString());
    if (params.headersHostAddressMCGlobal != null) __params = __params.set('headers.host.address.MCGlobal', params.headersHostAddressMCGlobal.toString());
    if (params.headersExpires != null) __params = __params.set('headers.expires', params.headersExpires.toString());
    if (params.headersDate != null) __params = __params.set('headers.date', params.headersDate.toString());
    if (params.headersContentTypeWildcardType != null) __params = __params.set('headers.contentType.wildcardType', params.headersContentTypeWildcardType.toString());
    if (params.headersContentTypeWildcardSubtype != null) __params = __params.set('headers.contentType.wildcardSubtype', params.headersContentTypeWildcardSubtype.toString());
    if (params.headersContentTypeType != null) __params = __params.set('headers.contentType.type', params.headersContentTypeType.toString());
    if (params.headersContentTypeSubtype != null) __params = __params.set('headers.contentType.subtype', params.headersContentTypeSubtype.toString());
    if (params.headersContentTypeQualityValue != null) __params = __params.set('headers.contentType.qualityValue', params.headersContentTypeQualityValue.toString());
    if (params.headersContentTypeConcrete != null) __params = __params.set('headers.contentType.concrete', params.headersContentTypeConcrete.toString());
    if (params.headersContentTypeCharsetRegistered != null) __params = __params.set('headers.contentType.charset.registered', params.headersContentTypeCharsetRegistered.toString());
    if (params.headersContentLength != null) __params = __params.set('headers.contentLength', params.headersContentLength.toString());
    if (params.headersContentLanguageVariant != null) __params = __params.set('headers.contentLanguage.variant', params.headersContentLanguageVariant.toString());
    (params.headersContentLanguageUnicodeLocaleKeys || []).forEach(val => {if (val != null) __params = __params.append('headers.contentLanguage.unicodeLocaleKeys', val.toString())});
    (params.headersContentLanguageUnicodeLocaleAttributes || []).forEach(val => {if (val != null) __params = __params.append('headers.contentLanguage.unicodeLocaleAttributes', val.toString())});
    if (params.headersContentLanguageScript != null) __params = __params.set('headers.contentLanguage.script', params.headersContentLanguageScript.toString());
    if (params.headersContentLanguageLanguage != null) __params = __params.set('headers.contentLanguage.language', params.headersContentLanguageLanguage.toString());
    if (params.headersContentLanguageDisplayVariant != null) __params = __params.set('headers.contentLanguage.displayVariant', params.headersContentLanguageDisplayVariant.toString());
    if (params.headersContentLanguageDisplayScript != null) __params = __params.set('headers.contentLanguage.displayScript', params.headersContentLanguageDisplayScript.toString());
    if (params.headersContentLanguageDisplayName != null) __params = __params.set('headers.contentLanguage.displayName', params.headersContentLanguageDisplayName.toString());
    if (params.headersContentLanguageDisplayLanguage != null) __params = __params.set('headers.contentLanguage.displayLanguage', params.headersContentLanguageDisplayLanguage.toString());
    if (params.headersContentLanguageDisplayCountry != null) __params = __params.set('headers.contentLanguage.displayCountry', params.headersContentLanguageDisplayCountry.toString());
    if (params.headersContentLanguageCountry != null) __params = __params.set('headers.contentLanguage.country', params.headersContentLanguageCountry.toString());
    if (params.headersContentLanguageISO3Language != null) __params = __params.set('headers.contentLanguage.ISO3Language', params.headersContentLanguageISO3Language.toString());
    if (params.headersContentLanguageISO3Country != null) __params = __params.set('headers.contentLanguage.ISO3Country', params.headersContentLanguageISO3Country.toString());
    if (params.headersContentDispositionType != null) __params = __params.set('headers.contentDisposition.type', params.headersContentDispositionType.toString());
    if (params.headersContentDispositionSize != null) __params = __params.set('headers.contentDisposition.size', params.headersContentDispositionSize.toString());
    if (params.headersContentDispositionReadDate != null) __params = __params.set('headers.contentDisposition.readDate', params.headersContentDispositionReadDate.toString());
    if (params.headersContentDispositionName != null) __params = __params.set('headers.contentDisposition.name', params.headersContentDispositionName.toString());
    if (params.headersContentDispositionModificationDate != null) __params = __params.set('headers.contentDisposition.modificationDate', params.headersContentDispositionModificationDate.toString());
    if (params.headersContentDispositionFilename != null) __params = __params.set('headers.contentDisposition.filename', params.headersContentDispositionFilename.toString());
    if (params.headersContentDispositionCreationDate != null) __params = __params.set('headers.contentDisposition.creationDate', params.headersContentDispositionCreationDate.toString());
    if (params.headersContentDispositionCharsetRegistered != null) __params = __params.set('headers.contentDisposition.charset.registered', params.headersContentDispositionCharsetRegistered.toString());
    (params.headersConnection || []).forEach(val => {if (val != null) __params = __params.append('headers.connection', val.toString())});
    if (params.headersCacheControl != null) __params = __params.set('headers.cacheControl', params.headersCacheControl.toString());
    (params.headersAllow || []).forEach(val => {if (val != null) __params = __params.append('headers.allow', val.toString())});
    if (params.headersAccessControlRequestMethod != null) __params = __params.set('headers.accessControlRequestMethod', params.headersAccessControlRequestMethod.toString());
    (params.headersAccessControlRequestHeaders || []).forEach(val => {if (val != null) __params = __params.append('headers.accessControlRequestHeaders', val.toString())});
    if (params.headersAccessControlMaxAge != null) __params = __params.set('headers.accessControlMaxAge', params.headersAccessControlMaxAge.toString());
    (params.headersAccessControlExposeHeaders || []).forEach(val => {if (val != null) __params = __params.append('headers.accessControlExposeHeaders', val.toString())});
    if (params.headersAccessControlAllowOrigin != null) __params = __params.set('headers.accessControlAllowOrigin', params.headersAccessControlAllowOrigin.toString());
    (params.headersAccessControlAllowMethods || []).forEach(val => {if (val != null) __params = __params.append('headers.accessControlAllowMethods', val.toString())});
    (params.headersAccessControlAllowHeaders || []).forEach(val => {if (val != null) __params = __params.append('headers.accessControlAllowHeaders', val.toString())});
    if (params.headersAccessControlAllowCredentials != null) __params = __params.set('headers.accessControlAllowCredentials', params.headersAccessControlAllowCredentials.toString());
    if (params.headersAccept0WildcardType != null) __params = __params.set('headers.accept[0].wildcardType', params.headersAccept0WildcardType.toString());
    if (params.headersAccept0WildcardSubtype != null) __params = __params.set('headers.accept[0].wildcardSubtype', params.headersAccept0WildcardSubtype.toString());
    if (params.headersAccept0Type != null) __params = __params.set('headers.accept[0].type', params.headersAccept0Type.toString());
    if (params.headersAccept0Subtype != null) __params = __params.set('headers.accept[0].subtype', params.headersAccept0Subtype.toString());
    if (params.headersAccept0QualityValue != null) __params = __params.set('headers.accept[0].qualityValue', params.headersAccept0QualityValue.toString());
    if (params.headersAccept0Concrete != null) __params = __params.set('headers.accept[0].concrete', params.headersAccept0Concrete.toString());
    if (params.headersAccept0CharsetRegistered != null) __params = __params.set('headers.accept[0].charset.registered', params.headersAccept0CharsetRegistered.toString());
    if (params.headersAcceptLanguage0Weight != null) __params = __params.set('headers.acceptLanguage[0].weight', params.headersAcceptLanguage0Weight.toString());
    if (params.headersAcceptLanguage0Range != null) __params = __params.set('headers.acceptLanguage[0].range', params.headersAcceptLanguage0Range.toString());
    if (params.headersAcceptLanguageAsLocales0Variant != null) __params = __params.set('headers.acceptLanguageAsLocales[0].variant', params.headersAcceptLanguageAsLocales0Variant.toString());
    (params.headersAcceptLanguageAsLocales0UnicodeLocaleKeys || []).forEach(val => {if (val != null) __params = __params.append('headers.acceptLanguageAsLocales[0].unicodeLocaleKeys', val.toString())});
    (params.headersAcceptLanguageAsLocales0UnicodeLocaleAttributes || []).forEach(val => {if (val != null) __params = __params.append('headers.acceptLanguageAsLocales[0].unicodeLocaleAttributes', val.toString())});
    if (params.headersAcceptLanguageAsLocales0Script != null) __params = __params.set('headers.acceptLanguageAsLocales[0].script', params.headersAcceptLanguageAsLocales0Script.toString());
    if (params.headersAcceptLanguageAsLocales0Language != null) __params = __params.set('headers.acceptLanguageAsLocales[0].language', params.headersAcceptLanguageAsLocales0Language.toString());
    if (params.headersAcceptLanguageAsLocales0DisplayVariant != null) __params = __params.set('headers.acceptLanguageAsLocales[0].displayVariant', params.headersAcceptLanguageAsLocales0DisplayVariant.toString());
    if (params.headersAcceptLanguageAsLocales0DisplayScript != null) __params = __params.set('headers.acceptLanguageAsLocales[0].displayScript', params.headersAcceptLanguageAsLocales0DisplayScript.toString());
    if (params.headersAcceptLanguageAsLocales0DisplayName != null) __params = __params.set('headers.acceptLanguageAsLocales[0].displayName', params.headersAcceptLanguageAsLocales0DisplayName.toString());
    if (params.headersAcceptLanguageAsLocales0DisplayLanguage != null) __params = __params.set('headers.acceptLanguageAsLocales[0].displayLanguage', params.headersAcceptLanguageAsLocales0DisplayLanguage.toString());
    if (params.headersAcceptLanguageAsLocales0DisplayCountry != null) __params = __params.set('headers.acceptLanguageAsLocales[0].displayCountry', params.headersAcceptLanguageAsLocales0DisplayCountry.toString());
    if (params.headersAcceptLanguageAsLocales0Country != null) __params = __params.set('headers.acceptLanguageAsLocales[0].country', params.headersAcceptLanguageAsLocales0Country.toString());
    if (params.headersAcceptLanguageAsLocales0ISO3Language != null) __params = __params.set('headers.acceptLanguageAsLocales[0].ISO3Language', params.headersAcceptLanguageAsLocales0ISO3Language.toString());
    if (params.headersAcceptLanguageAsLocales0ISO3Country != null) __params = __params.set('headers.acceptLanguageAsLocales[0].ISO3Country', params.headersAcceptLanguageAsLocales0ISO3Country.toString());
    if (params.headersAcceptCharset0Registered != null) __params = __params.set('headers.acceptCharset[0].registered', params.headersAcceptCharset0Registered.toString());
    if (params.headersETag != null) __params = __params.set('headers.ETag', params.headersETag.toString());
    if (params.bodyUserUsername != null) __params = __params.set('body.user.username', params.bodyUserUsername.toString());
    if (params.bodyUserSurname != null) __params = __params.set('body.user.surname', params.bodyUserSurname.toString());
    if (params.bodyUserSeansDtoSeatCount != null) __params = __params.set('body.user.seansDto.seatCount', params.bodyUserSeansDtoSeatCount.toString());
    if (params.bodyUserSeansDtoRowNumber != null) __params = __params.set('body.user.seansDto.rowNumber', params.bodyUserSeansDtoRowNumber.toString());
    if (params.bodyUserSeansDtoRoomNumber != null) __params = __params.set('body.user.seansDto.roomNumber', params.bodyUserSeansDtoRoomNumber.toString());
    if (params.bodyUserSeansDtoId != null) __params = __params.set('body.user.seansDto.id', params.bodyUserSeansDtoId.toString());
    (params.bodyUserRoles || []).forEach(val => {if (val != null) __params = __params.append('body.user.roles', val.toString())});
    if (params.bodyUserReviewDtoId != null) __params = __params.set('body.user.reviewDto.id', params.bodyUserReviewDtoId.toString());
    if (params.bodyUserPasswordConfirmation != null) __params = __params.set('body.user.passwordConfirmation', params.bodyUserPasswordConfirmation.toString());
    if (params.bodyUserPassword != null) __params = __params.set('body.user.password', params.bodyUserPassword.toString());
    if (params.bodyUserName != null) __params = __params.set('body.user.name', params.bodyUserName.toString());
    if (params.bodyUserLoyaltyCardDtoPrice != null) __params = __params.set('body.user.loyaltyCardDto.price', params.bodyUserLoyaltyCardDtoPrice.toString());
    if (params.bodyUserLoyaltyCardDtoMaxTicket != null) __params = __params.set('body.user.loyaltyCardDto.maxTicket', params.bodyUserLoyaltyCardDtoMaxTicket.toString());
    if (params.bodyUserLoyaltyCardDtoId != null) __params = __params.set('body.user.loyaltyCardDto.id', params.bodyUserLoyaltyCardDtoId.toString());
    if (params.bodyUserLoyaltyCardDtoExpirationDate != null) __params = __params.set('body.user.loyaltyCardDto.expirationDate', params.bodyUserLoyaltyCardDtoExpirationDate.toString());
    if (params.bodyUserLoyaltyCardDtoDiscount != null) __params = __params.set('body.user.loyaltyCardDto.discount', params.bodyUserLoyaltyCardDtoDiscount.toString());
    if (params.bodyUserId != null) __params = __params.set('body.user.id', params.bodyUserId.toString());
    if (params.bodyUserEmail != null) __params = __params.set('body.user.email', params.bodyUserEmail.toString());
    if (params.bodyUserAge != null) __params = __params.set('body.user.age', params.bodyUserAge.toString());
    if (params.bodyMovieTitle != null) __params = __params.set('body.movie.title', params.bodyMovieTitle.toString());
    if (params.bodyMovieReleaseDate != null) __params = __params.set('body.movie.releaseDate', params.bodyMovieReleaseDate.toString());
    if (params.bodyMoviePrice != null) __params = __params.set('body.movie.price', params.bodyMoviePrice.toString());
    if (params.bodyMovieId != null) __params = __params.set('body.movie.id', params.bodyMovieId.toString());
    if (params.bodyMovieGenre != null) __params = __params.set('body.movie.genre', params.bodyMovieGenre.toString());
    if (params.bodyMovieDuration != null) __params = __params.set('body.movie.duration', params.bodyMovieDuration.toString());
    if (params.bodyMovieDescription != null) __params = __params.set('body.movie.description', params.bodyMovieDescription.toString());
    if (params.bodyId != null) __params = __params.set('body.id', params.bodyId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/reservations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InfoReservationDto>;
      })
    );
  }
  /**
   * @param params The `ReservationControllerService.AddUsingPOST1Params` containing the following parameters:
   *
   * - `url.userInfo`:
   *
   * - `url.schemeSpecificPart`:
   *
   * - `url.scheme`:
   *
   * - `url.rawUserInfo`:
   *
   * - `url.rawSchemeSpecificPart`:
   *
   * - `url.rawQuery`:
   *
   * - `url.rawPath`:
   *
   * - `url.rawFragment`:
   *
   * - `url.rawAuthority`:
   *
   * - `url.query`:
   *
   * - `url.port`:
   *
   * - `url.path`:
   *
   * - `url.opaque`:
   *
   * - `url.host`:
   *
   * - `url.fragment`:
   *
   * - `url.authority`:
   *
   * - `url.absolute`:
   *
   * - `type`:
   *
   * - `method`:
   *
   * - `headers.vary`:
   *
   * - `headers.upgrade`:
   *
   * - `headers.pragma`:
   *
   * - `headers.origin`:
   *
   * - `headers.location.userInfo`:
   *
   * - `headers.location.schemeSpecificPart`:
   *
   * - `headers.location.scheme`:
   *
   * - `headers.location.rawUserInfo`:
   *
   * - `headers.location.rawSchemeSpecificPart`:
   *
   * - `headers.location.rawQuery`:
   *
   * - `headers.location.rawPath`:
   *
   * - `headers.location.rawFragment`:
   *
   * - `headers.location.rawAuthority`:
   *
   * - `headers.location.query`:
   *
   * - `headers.location.port`:
   *
   * - `headers.location.path`:
   *
   * - `headers.location.opaque`:
   *
   * - `headers.location.host`:
   *
   * - `headers.location.fragment`:
   *
   * - `headers.location.authority`:
   *
   * - `headers.location.absolute`:
   *
   * - `headers.lastModified`:
   *
   * - `headers.ifUnmodifiedSince`:
   *
   * - `headers.ifNoneMatch`:
   *
   * - `headers.ifModifiedSince`:
   *
   * - `headers.ifMatch`:
   *
   * - `headers.host.unresolved`:
   *
   * - `headers.host.port`:
   *
   * - `headers.host.hostString`:
   *
   * - `headers.host.hostName`:
   *
   * - `headers.host.address.siteLocalAddress`:
   *
   * - `headers.host.address.multicastAddress`:
   *
   * - `headers.host.address.loopbackAddress`:
   *
   * - `headers.host.address.linkLocalAddress`:
   *
   * - `headers.host.address.hostName`:
   *
   * - `headers.host.address.hostAddress`:
   *
   * - `headers.host.address.canonicalHostName`:
   *
   * - `headers.host.address.anyLocalAddress`:
   *
   * - `headers.host.address.address`:
   *
   * - `headers.host.address.MCSiteLocal`:
   *
   * - `headers.host.address.MCOrgLocal`:
   *
   * - `headers.host.address.MCNodeLocal`:
   *
   * - `headers.host.address.MCLinkLocal`:
   *
   * - `headers.host.address.MCGlobal`:
   *
   * - `headers.expires`:
   *
   * - `headers.date`:
   *
   * - `headers.contentType.wildcardType`:
   *
   * - `headers.contentType.wildcardSubtype`:
   *
   * - `headers.contentType.type`:
   *
   * - `headers.contentType.subtype`:
   *
   * - `headers.contentType.qualityValue`:
   *
   * - `headers.contentType.concrete`:
   *
   * - `headers.contentType.charset.registered`:
   *
   * - `headers.contentLength`:
   *
   * - `headers.contentLanguage.variant`:
   *
   * - `headers.contentLanguage.unicodeLocaleKeys`:
   *
   * - `headers.contentLanguage.unicodeLocaleAttributes`:
   *
   * - `headers.contentLanguage.script`:
   *
   * - `headers.contentLanguage.language`:
   *
   * - `headers.contentLanguage.displayVariant`:
   *
   * - `headers.contentLanguage.displayScript`:
   *
   * - `headers.contentLanguage.displayName`:
   *
   * - `headers.contentLanguage.displayLanguage`:
   *
   * - `headers.contentLanguage.displayCountry`:
   *
   * - `headers.contentLanguage.country`:
   *
   * - `headers.contentLanguage.ISO3Language`:
   *
   * - `headers.contentLanguage.ISO3Country`:
   *
   * - `headers.contentDisposition.type`:
   *
   * - `headers.contentDisposition.size`:
   *
   * - `headers.contentDisposition.readDate`:
   *
   * - `headers.contentDisposition.name`:
   *
   * - `headers.contentDisposition.modificationDate`:
   *
   * - `headers.contentDisposition.filename`:
   *
   * - `headers.contentDisposition.creationDate`:
   *
   * - `headers.contentDisposition.charset.registered`:
   *
   * - `headers.connection`:
   *
   * - `headers.cacheControl`:
   *
   * - `headers.allow`:
   *
   * - `headers.accessControlRequestMethod`:
   *
   * - `headers.accessControlRequestHeaders`:
   *
   * - `headers.accessControlMaxAge`:
   *
   * - `headers.accessControlExposeHeaders`:
   *
   * - `headers.accessControlAllowOrigin`:
   *
   * - `headers.accessControlAllowMethods`:
   *
   * - `headers.accessControlAllowHeaders`:
   *
   * - `headers.accessControlAllowCredentials`:
   *
   * - `headers.accept[0].wildcardType`:
   *
   * - `headers.accept[0].wildcardSubtype`:
   *
   * - `headers.accept[0].type`:
   *
   * - `headers.accept[0].subtype`:
   *
   * - `headers.accept[0].qualityValue`:
   *
   * - `headers.accept[0].concrete`:
   *
   * - `headers.accept[0].charset.registered`:
   *
   * - `headers.acceptLanguage[0].weight`:
   *
   * - `headers.acceptLanguage[0].range`:
   *
   * - `headers.acceptLanguageAsLocales[0].variant`:
   *
   * - `headers.acceptLanguageAsLocales[0].unicodeLocaleKeys`:
   *
   * - `headers.acceptLanguageAsLocales[0].unicodeLocaleAttributes`:
   *
   * - `headers.acceptLanguageAsLocales[0].script`:
   *
   * - `headers.acceptLanguageAsLocales[0].language`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayVariant`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayScript`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayName`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayLanguage`:
   *
   * - `headers.acceptLanguageAsLocales[0].displayCountry`:
   *
   * - `headers.acceptLanguageAsLocales[0].country`:
   *
   * - `headers.acceptLanguageAsLocales[0].ISO3Language`:
   *
   * - `headers.acceptLanguageAsLocales[0].ISO3Country`:
   *
   * - `headers.acceptCharset[0].registered`:
   *
   * - `headers.ETag`:
   *
   * - `body.user.username`:
   *
   * - `body.user.surname`:
   *
   * - `body.user.seansDto.seatCount`:
   *
   * - `body.user.seansDto.rowNumber`:
   *
   * - `body.user.seansDto.roomNumber`:
   *
   * - `body.user.seansDto.id`:
   *
   * - `body.user.roles`:
   *
   * - `body.user.reviewDto.id`:
   *
   * - `body.user.passwordConfirmation`:
   *
   * - `body.user.password`:
   *
   * - `body.user.name`:
   *
   * - `body.user.loyaltyCardDto.price`:
   *
   * - `body.user.loyaltyCardDto.maxTicket`:
   *
   * - `body.user.loyaltyCardDto.id`:
   *
   * - `body.user.loyaltyCardDto.expirationDate`:
   *
   * - `body.user.loyaltyCardDto.discount`:
   *
   * - `body.user.id`:
   *
   * - `body.user.email`:
   *
   * - `body.user.age`:
   *
   * - `body.movie.title`:
   *
   * - `body.movie.releaseDate`:
   *
   * - `body.movie.price`:
   *
   * - `body.movie.id`:
   *
   * - `body.movie.genre`:
   *
   * - `body.movie.duration`:
   *
   * - `body.movie.description`:
   *
   * - `body.id`:
   *
   * @return OK
   */
  addUsingPOST1(params: ReservationControllerService.AddUsingPOST1Params): __Observable<InfoReservationDto> {
    return this.addUsingPOST1Response(params).pipe(
      __map(_r => _r.body as InfoReservationDto)
    );
  }
}

module ReservationControllerService {

  /**
   * Parameters for addUsingPOST1
   */
  export interface AddUsingPOST1Params {
    urlUserInfo?: string;
    urlSchemeSpecificPart?: string;
    urlScheme?: string;
    urlRawUserInfo?: string;
    urlRawSchemeSpecificPart?: string;
    urlRawQuery?: string;
    urlRawPath?: string;
    urlRawFragment?: string;
    urlRawAuthority?: string;
    urlQuery?: string;
    urlPort?: number;
    urlPath?: string;
    urlOpaque?: boolean;
    urlHost?: string;
    urlFragment?: string;
    urlAuthority?: string;
    urlAbsolute?: boolean;
    type?: any;
    method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';
    headersVary?: Array<string>;
    headersUpgrade?: string;
    headersPragma?: string;
    headersOrigin?: string;
    headersLocationUserInfo?: string;
    headersLocationSchemeSpecificPart?: string;
    headersLocationScheme?: string;
    headersLocationRawUserInfo?: string;
    headersLocationRawSchemeSpecificPart?: string;
    headersLocationRawQuery?: string;
    headersLocationRawPath?: string;
    headersLocationRawFragment?: string;
    headersLocationRawAuthority?: string;
    headersLocationQuery?: string;
    headersLocationPort?: number;
    headersLocationPath?: string;
    headersLocationOpaque?: boolean;
    headersLocationHost?: string;
    headersLocationFragment?: string;
    headersLocationAuthority?: string;
    headersLocationAbsolute?: boolean;
    headersLastModified?: number;
    headersIfUnmodifiedSince?: number;
    headersIfNoneMatch?: Array<string>;
    headersIfModifiedSince?: number;
    headersIfMatch?: Array<string>;
    headersHostUnresolved?: boolean;
    headersHostPort?: number;
    headersHostHostString?: string;
    headersHostHostName?: string;
    headersHostAddressSiteLocalAddress?: boolean;
    headersHostAddressMulticastAddress?: boolean;
    headersHostAddressLoopbackAddress?: boolean;
    headersHostAddressLinkLocalAddress?: boolean;
    headersHostAddressHostName?: string;
    headersHostAddressHostAddress?: string;
    headersHostAddressCanonicalHostName?: string;
    headersHostAddressAnyLocalAddress?: boolean;
    headersHostAddressAddress?: string;
    headersHostAddressMCSiteLocal?: boolean;
    headersHostAddressMCOrgLocal?: boolean;
    headersHostAddressMCNodeLocal?: boolean;
    headersHostAddressMCLinkLocal?: boolean;
    headersHostAddressMCGlobal?: boolean;
    headersExpires?: number;
    headersDate?: number;
    headersContentTypeWildcardType?: boolean;
    headersContentTypeWildcardSubtype?: boolean;
    headersContentTypeType?: string;
    headersContentTypeSubtype?: string;
    headersContentTypeQualityValue?: number;
    headersContentTypeConcrete?: boolean;
    headersContentTypeCharsetRegistered?: boolean;
    headersContentLength?: number;
    headersContentLanguageVariant?: string;
    headersContentLanguageUnicodeLocaleKeys?: Array<string>;
    headersContentLanguageUnicodeLocaleAttributes?: Array<string>;
    headersContentLanguageScript?: string;
    headersContentLanguageLanguage?: string;
    headersContentLanguageDisplayVariant?: string;
    headersContentLanguageDisplayScript?: string;
    headersContentLanguageDisplayName?: string;
    headersContentLanguageDisplayLanguage?: string;
    headersContentLanguageDisplayCountry?: string;
    headersContentLanguageCountry?: string;
    headersContentLanguageISO3Language?: string;
    headersContentLanguageISO3Country?: string;
    headersContentDispositionType?: string;
    headersContentDispositionSize?: number;
    headersContentDispositionReadDate?: string;
    headersContentDispositionName?: string;
    headersContentDispositionModificationDate?: string;
    headersContentDispositionFilename?: string;
    headersContentDispositionCreationDate?: string;
    headersContentDispositionCharsetRegistered?: boolean;
    headersConnection?: Array<string>;
    headersCacheControl?: string;
    headersAllow?: Array<'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE'>;
    headersAccessControlRequestMethod?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';
    headersAccessControlRequestHeaders?: Array<string>;
    headersAccessControlMaxAge?: number;
    headersAccessControlExposeHeaders?: Array<string>;
    headersAccessControlAllowOrigin?: string;
    headersAccessControlAllowMethods?: Array<'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE'>;
    headersAccessControlAllowHeaders?: Array<string>;
    headersAccessControlAllowCredentials?: boolean;
    headersAccept0WildcardType?: boolean;
    headersAccept0WildcardSubtype?: boolean;
    headersAccept0Type?: string;
    headersAccept0Subtype?: string;
    headersAccept0QualityValue?: number;
    headersAccept0Concrete?: boolean;
    headersAccept0CharsetRegistered?: boolean;
    headersAcceptLanguage0Weight?: number;
    headersAcceptLanguage0Range?: string;
    headersAcceptLanguageAsLocales0Variant?: string;
    headersAcceptLanguageAsLocales0UnicodeLocaleKeys?: Array<string>;
    headersAcceptLanguageAsLocales0UnicodeLocaleAttributes?: Array<string>;
    headersAcceptLanguageAsLocales0Script?: string;
    headersAcceptLanguageAsLocales0Language?: string;
    headersAcceptLanguageAsLocales0DisplayVariant?: string;
    headersAcceptLanguageAsLocales0DisplayScript?: string;
    headersAcceptLanguageAsLocales0DisplayName?: string;
    headersAcceptLanguageAsLocales0DisplayLanguage?: string;
    headersAcceptLanguageAsLocales0DisplayCountry?: string;
    headersAcceptLanguageAsLocales0Country?: string;
    headersAcceptLanguageAsLocales0ISO3Language?: string;
    headersAcceptLanguageAsLocales0ISO3Country?: string;
    headersAcceptCharset0Registered?: boolean;
    headersETag?: string;
    bodyUserUsername?: string;
    bodyUserSurname?: string;
    bodyUserSeansDtoSeatCount?: number;
    bodyUserSeansDtoRowNumber?: number;
    bodyUserSeansDtoRoomNumber?: number;
    bodyUserSeansDtoId?: number;
    bodyUserRoles?: Array<string>;
    bodyUserReviewDtoId?: number;
    bodyUserPasswordConfirmation?: string;
    bodyUserPassword?: string;
    bodyUserName?: string;
    bodyUserLoyaltyCardDtoPrice?: number;
    bodyUserLoyaltyCardDtoMaxTicket?: number;
    bodyUserLoyaltyCardDtoId?: number;
    bodyUserLoyaltyCardDtoExpirationDate?: string;
    bodyUserLoyaltyCardDtoDiscount?: number;
    bodyUserId?: number;
    bodyUserEmail?: string;
    bodyUserAge?: number;
    bodyMovieTitle?: string;
    bodyMovieReleaseDate?: string;
    bodyMoviePrice?: number;
    bodyMovieId?: number;
    bodyMovieGenre?: string;
    bodyMovieDuration?: number;
    bodyMovieDescription?: string;
    bodyId?: number;
  }
}

export { ReservationControllerService }
