import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./model/User";
import { Group } from "./model/Group";

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: "someToken",
//   }),
//   withCredentials: true,
// };

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentuser: User = null;
  isLoggedIn: Boolean = false;
  currentgroup: String;
  curGrp: Group;
  groups: Group[];

  constructor(public http: HttpClient) {}

  getExpenses(id) {
    return this.http.get("http://localhost:8080/group/expenses/" + id);
  }
  signIn(login) {
    return this.http.post("http://localhost:8080/login", login);
  }
  patRegister(user) {
    return this.http.post("http://localhost:8080/register", user);
  }
  groupRegister(grp) {
    return this.http.post("http://localhost:8080/group/create", grp);
  }
  // patUpdate(pat) {
  //   return this.http.put(
  //     "http://localhost:8080/patient/update",
  //     pat,
  //     httpOptions
  //   );
  // }
  // showPartners() {
  //   return this.http.get("http://localhost:8080/partners");
  // }
  // showVaccines() {
  //   return this.http.get("http://localhost:8080/vaccines");
  // }
  // showVaccinesOrgName() {
  //   return this.http.get("http://localhost:8080/partners");
  // }
  getGroups(username) {
    return this.http.get("http://localhost:8080/user/group/" + username);
  }
  // addVaccine(vaccine: Vaccine) {
  //   return this.http.post(
  //     "http://localhost:8080/vaccine/add",
  //     vaccine,
  //     httpOptions
  //   );
  // }
  // getResult(id) {
  //   return this.http.get(
  //     "http://localhost:8080/patient/" + id + "/report",
  //     httpOptions
  //   );
  // }
  getGroup(id) {
    return this.http.get("http://localhost:8080/group/" + id);
  }
  // getVaccineByOrgId(id) {
  //   return this.http.get(
  //     "http://localhost:8080/org/" + id + "/vaccines",
  //     httpOptions
  //   );
  // }
  // getVaccD(disease) {
  //   return this.http.get(
  //     "http://localhost:8080/vaccine/disease/" + disease,
  //     httpOptions
  //   );
  // }
  // getDistinctDisease() {
  //   return this.http.get("http://localhost:8080/distinct/disease");
  // }
  // orgUpdate(org) {
  //   return this.http.put("http://localhost:8080/org/update", org, httpOptions);
  // }
  // vaccUpdate(vacc) {
  //   return this.http.put(
  //     "http://localhost:8080/vaccine/update",
  //     vacc,
  //     httpOptions
  //   );
  // }
  // getPatientsByDisease(disease) {
  //   return this.http.get(
  //     "http://localhost:8080/unenrolledpatients/" + disease,
  //     httpOptions
  //   );
  // }
  // getPatient(id) {
  //   return this.http.get("http://localhost:8080/patient/" + id, httpOptions);
  // }
  // addReport(rep) {
  //   return this.http.post("http://localhost:8080/report/add", rep, httpOptions);
  // }
  // getVacReport(id) {
  //   return this.http.get(
  //     "http://localhost:8080/report/vaccine/" + id,
  //     httpOptions
  //   );
  // }
  // getPatientByOrgId(id) {
  //   return this.http.get(
  //     "http://localhost:8080/org/" + id + "/patients",
  //     httpOptions
  //   );
  // }
  // updateReport(report) {
  //   return this.http.put(
  //     "http://localhost:8080/report/update",
  //     report,
  //     httpOptions
  //   );
  // }
}
