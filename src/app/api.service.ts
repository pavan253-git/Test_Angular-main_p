import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = 'api/search/documentSearch?';

  private routesAPi = 'api/search/routeSearch?';

  private auditsApi = 'api/search/auditSearch?';

  private manageAuditStatusesApi = 'api/adminConfiguration/manageAuditStatuses';

  private manageDetailDocTypesApi =
    'api/adminConfiguration/manageDetailDocTypes';

  private manageEffectivitiesApi = 'api/adminConfiguration/manageEffectivities';

  private manageEccnNumbersApi = 'api/adminConfiguration/manageEccnNumbers';

  private manageEccnLocationsApi = 'api/adminConfiguration/manageEccnLocations';

  private documentCategoriesApi = 'api/adminConfiguration/documentCategories';

  private manageSectionsApi = 'api/adminConfiguration/manageSections';

  private saveManageSectionsApi = 'api/adminConfiguration/saveSection';
  private deleteManageSectionsApi = 'api/adminConfiguration/deleteSection';

  private saveDocumentCategoryApi =
    'api/adminConfiguration/saveDocumentCategory';
  private deleteDocumentCategoryApi =
    'api/adminConfiguration/deleteDocumentCategory';

  private saveAuditStatusApi = 'api/adminConfiguration/saveAuditStatus';
  private deleteAuditStatusApi = 'api/adminConfiguration/deleteAuditStatus';

  private saveDetailDocTypeApi = 'api/adminConfiguration/saveDetailDocType';
  private deleteDetailDocTypeApi = 'api/adminConfiguration/deleteDetailDocType';

  private saveEffectivityApi = 'api/adminConfiguration/saveEffectivity';
  private deleteEffectivityApi = 'api/adminConfiguration/deleteEffectivity';

  private saveEccnNumberApi = 'api/adminConfiguration/saveEccnNumber';
  private deleteEccnNumberApi = 'api/adminConfiguration/deleteEccnNumber';

  private saveEccnLocationApi = 'api/adminConfiguration/saveEccnLocation';
  private deleteEccnLocationApi = 'api/adminConfiguration/deleteEccnLocation';

  constructor(private http: HttpClient) {}

  postData(payload: any, start: any, size: any): Observable<any> {
    return this.http.post(this.api, payload, {
      params: {
        start: start,
        size: size,
      },
    });
  }

  routesData(payload: any, start: any, size: any): Observable<any> {
    return this.http.post(this.routesAPi, payload, {
      params: {
        start: start,
        size: size,
      },
    });
  }

  auditsData(payload: any, start: any, size: any): Observable<any> {
    return this.http.post(this.auditsApi, payload, {
      params: {
        start: start,
        size: size,
      },
    });
  }

  getAuditStatuses(): Observable<any> {
    return this.http.get<any>(this.manageAuditStatusesApi);
  }

  getDocTypes(): Observable<any> {
    return this.http.get<any>(this.manageDetailDocTypesApi);
  }

  getEffectivites(): Observable<any> {
    return this.http.get<any>(this.manageEffectivitiesApi);
  }

  getEccnNumbers(): Observable<any> {
    return this.http.get<any>(this.manageEccnNumbersApi);
  }

  getEccnLocations(): Observable<any> {
    return this.http.get<any>(this.manageEccnLocationsApi);
  }

  getDocCategories(): Observable<any> {
    return this.http.get<any>(this.documentCategoriesApi);
  }

  getSections(): Observable<any> {
    return this.http.get<any>(this.manageSectionsApi);
  }

  updateManageSections(
    section: any,
    description: string,
    inactiveInd: any,
    inactiveDate: any
  ): Observable<any> {
    return this.http.post<any>(this.saveManageSectionsApi, {
      section,
      description,
      inactiveInd,
      inactiveDate,
    });
  }

  deleteManageSections(section: any): Observable<any> {
    return this.http.delete<any>(`${this.saveManageSectionsApi}/${section}`);
  }

  saveDocumentCategory(
    documentCatgCd: any,
    documentCatgDesc: string
  ): Observable<any> {
    return this.http.post<any>(this.saveDocumentCategoryApi, {
      documentCatgCd,
      documentCatgDesc,
    });
  }

  deleteDocumentCategory(documentCatgCd: any): Observable<any> {
    return this.http.delete<any>(
      `${this.deleteDocumentCategoryApi}/${documentCatgCd}`
    );
  }

  saveAuditStatus(
    auditStatusCd: any,
    auditStatusDesc: string
  ): Observable<any> {
    return this.http.post<any>(this.saveAuditStatusApi, {
      auditStatusCd,
      auditStatusDesc,
    });
  }

  deleteAuditStatus(auditStatusCd: any): Observable<any> {
    return this.http.delete<any>(
      `${this.deleteAuditStatusApi}/${auditStatusCd}`
    );
  }

  saveDetailDocType(
    detailDocType: any,
    detailDocTypeDesc: string,
    auditableInd: any
  ): Observable<any> {
    return this.http.post<any>(this.saveDetailDocTypeApi, {
      detailDocType,
      detailDocTypeDesc,
      auditableInd,
    });
  }

  deleteDetailDocType(detailDocType: any): Observable<any> {
    return this.http.delete<any>(
      `${this.deleteDetailDocTypeApi}/${detailDocType}`
    );
  }

  saveEffectivity(
    effectivityId: any,
    esoMinSeqNbr: string,
    esoMaxSeqNbr: string,
    esoCurrSeqNbr: any,
    inactiveInd: any
  ): Observable<any> {
    return this.http.post<any>(this.saveEffectivityApi, {
      effectivityId,
      effectivityFleet: { esoMinSeqNbr, esoMaxSeqNbr, esoCurrSeqNbr },
      inactiveInd,
    });
  }

  deleteEffectivity(effectivityId: any): Observable<any> {
    return this.http.delete<any>(
      `${this.deleteEffectivityApi}/${effectivityId}`
    );
  }

  saveEccnNumber(eccnNumber: any): Observable<any> {
    return this.http.post<any>(this.saveEccnNumberApi, { eccnNumber });
  }

  deleteEccnNumber(eccnNumber: any): Observable<any> {
    return this.http.delete<any>(`${this.deleteEccnNumberApi}/${eccnNumber}`);
  }

  saveEccnLocation(
    eccnLocationCd: any,
    eccnLocationDesc: string
  ): Observable<any> {
    return this.http.post<any>(this.saveEccnLocationApi, {
      eccnLocationCd,
      eccnLocationDesc,
    });
  }

  deleteEccnLocation(eccnLocationCd: any): Observable<any> {
    return this.http.delete<any>(
      `${this.deleteEccnLocationApi}/${eccnLocationCd}`
    );
  }

  checkApiHealth(): Observable<any> {
    return this.http
      .get('https://mevendtrk-svc-np.maverick.aa.com/vdt/actuator/health')
      .pipe(
        catchError((error) => {
          return of({ status: 'down', error });
        })
      );
  }
}
