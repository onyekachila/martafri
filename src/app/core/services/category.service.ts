import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
//import { AuthenticationService } from './authentication.service';
import { CategoryDto } from 'src/app/shared/models/category.model';
import { CategoriesRootObject } from 'src/app/shared/models/data.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private apiService: BaseApiService
              ) { }


  getTopCategories(size: number = 8, hasProducts: boolean = false) {
    const url = '/categories/allCategories?page=1&limit=' + `${size}` + '&Fields=id,name,subCategories';
    return this.apiService.get<CategoriesRootObject>(url).pipe(
    );
  }

  getCategory(categoryId: number) {
    const url = '/categories/' + `${categoryId}` + '?Fields=name,description,image,subCategories,products';
    return this.apiService.get<CategoriesRootObject>(url).pipe(
    );
  }

  getAllCategories() {
    const url = '/categories/allCategories?page=1&limit=100';
    return this.apiService.get<CategoriesRootObject>(url).pipe(
    );

  }


  searchCategories(searchString: string, size: number = 5, hasProducts: boolean = true): Observable<string[]> {
    if (!searchString.trim()) {
      return of([]);
    }
    // tslint:disable-next-line:max-line-length
  //  return this.http.get<string[]>(`${this.apiUrl}category/Names?search=${searchString}&size=${size}&hasProducts=${hasProducts}`,
   // this.authService.jsonTokenHeader()).pipe(
   //   catchError(this.handleError)
   // );
  }
}
