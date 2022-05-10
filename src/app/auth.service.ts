import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./model/User";

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

  constructor(public http: HttpClient) {}

  // signInOrg(login) {
  //   return this.http.post(
  //     "http://localhost:8080/org/signin",
  //     login,
  //     httpOptions
  //   );
  // }
  signIn(login) {
    return this.http.post("http://localhost:8080/login", login);
  }
  patRegister(user) {
    return this.http.post("http://localhost:8080/register", user);
  }
  // orgRegister(org) {
  //   return this.http.post("http://localhost:8080/org/signup", org);
  // }
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
  // getOrg(id) {
  //   return this.http.get("http://localhost:8080/org/" + id);
  // }
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
  // getVacc(id) {
  //   return this.http.get("http://localhost:8080/vaccine/id/" + id);
  // }
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
