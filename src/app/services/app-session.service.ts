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
   * Removes reflection data from browser storage
   */
  removeReflectionData() {
    localStorage.removeItem('TFSHP_RFLT');
  }

  /**
   * Stores prayer data in browser local storage
   * @param data json
   */
  setPrayerData(data: any) {
    localStorage.setItem('PRY_DTA', JSON.stringify(data));
  }

  /**
   * Get prayer data from browser local storage
   */
  getPrayerData() {
    let data: any = null;
    localStorage.getItem('PRY_DTA') ? data = localStorage.getItem('PRY_DTA')?.toString() : null;
    return JSON.parse(data);
  }

  /**
   * Removes prayer data from browser storage
   */
  removePrayerData() {
    localStorage.removeItem('PRY_DTA');
  }
}
