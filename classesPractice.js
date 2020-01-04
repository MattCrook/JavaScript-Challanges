class Surgeon {
   constructor(name, department) {
     this._name = name;
     this._department = department;
     this._remainingVacationDays = 20;
   }
   
   get name() {
     return this._name;
   }
   
   get department() {
     return this._department;
   }
   
   get remainingVacationDays() {
     return this._remainingVacationDays;
   }
   
   takeVacationDays(daysOff) {
     this._remainingVacationDays -= daysOff;
   }
 }
 
 const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
 const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
 console.log(surgeonCurry.name); // "Curry"
surgeonCurry.takeVacationDays(3); // calls argument of 3 on method
console.log(surgeonCurry.remainingVacationDays);  // 17



// start of class inheritance
// HosptialEmployee is parent class
class HospitalEmployee {
   constructor(name) {
     this._name = name;
     this._remainingVacationDays = 20;
   }
   get name() {
     return this._name;
   }
   get remainingVacationDays() {
     return this._remainingVacationDays;
   }
   takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
   }
 };
 // subclasses of Doctor and Nurse
 class Doctor {
   constructor(name) {
     this._name = name;
     this._remainingVacationDays = 20;
   }
   takeVacationDays() {
     
   }
 };
 
 class Nurse {
   constructor(name, certifications) {
     this._name = name;
     this._remainingVacationDays = 20;
     this._certifications = certifications;
   }
   takeVacationDays() {
     
   }
 addCertification() {
   
   }
 };

 // create Nurse class as a child of the HosptialEmployee
 // create Nurse class as a child of the HosptialEmployee

class HospitalEmployee {
   constructor(name) {
     this._name = name;
     this._remainingVacationDays = 20;
   }
   
   get name() {
     return this._name;
   }
   
   get remainingVacationDays() {
     return this._remainingVacationDays;
   }
   
   takeVacationDays(daysOff) {
     this._remainingVacationDays -= daysOff;
   }
 }
 
 class Nurse extends HospitalEmployee {
   constructor(name, certifications) {
     super(name);
     this._certifications = certifications;
   } 
   get certifications() {
     return this._certifications;
   }
   addCertification(newCertification) {
     this._certifications.push(newCertification);
   }
 }
 
 const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
 nurseOlynyk.takeVacationDays(5);
 console.log(nurseOlynyk.remainingVacationDays); // 15
 
 nurseOlynyk.addCertification("Genetics");
 console.log(nurseOlynyk.certifications);  // [ 'Trauma', 'Pediatrics', 'Genetics' ]
