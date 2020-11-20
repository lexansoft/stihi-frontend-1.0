import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../shared/services/base.service';

@Injectable()
export class PostsService extends BaseService {
  constructor(
    private http: HttpClient,
  ) {
    super(http, "");
  }
}
