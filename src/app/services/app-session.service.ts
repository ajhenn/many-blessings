import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSessionService {

  tabIndexValue = 0;

  constructor() { }

  /**
   * Stores reflection data in browser local storage
   * @param data json
   */
  setReflectionData(data: any) {
    localStorage.setItem('TFSHP_RFLT', JSON.stringify(data));
  }

  /**
   * Get refection data from browser local storage
   */
  getReflectionData() {
    let data: any = null;
    localStorage.getItem('TFSHP_RFLT') ? data = localStorage.getItem('TFSHP_RFLT')?.toString() : null;
    return JSON.parse(data);
  }

  /**
   * Removes data from browser storage
   */
  removeReflectionData() {
    localStorage.removeItem('TFSHP_RFLT');
  }
}
