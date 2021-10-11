//Dijaddin satu aja yang oop 


//no 1
//1. Akan memunculkan fun1 dengan mengembalikan objek, sedangkan fun2 tidak mengembalikan karena tidak ada return 
//2. Berbeda karena fun1 ada return sedangkan fun2 tidak ada
//3. Karena di fun2 tidak ada kembalian atau return sehingga tidak ditampilkan apa-apa


const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();


//no 2
//1. Enkapsulasi membuat data yang ada di objek tidak dapat diubah, sehingga orang tidka bisa semabrangan mengacak-ngacak datanya
//2. Abstraksi adalah sebuah teknik untuk untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
//3. Inheritance adalah tool untuk mewariskan methods dan fields dari class lain 
//4. Polymorphism adalah teknik untuk variables di menunjuk ke banyak tipe data, sehingga memiliki banyak bentuk tapi kode yang lebih sederhna
  

//no 3
class Phone {
  constructor(brand, storage, ram){
this.brand = brand
    this.storage = storage
    this.ram = ram
}
getBrandName(){
     return this.brand
}
setBrandName(newName){  
        this.brand = newName
}
printSpecification(){
    console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
}
setSpecification(storage,ram){
    this.storage = storage
    this.ram = ram
}}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

//no 4
//edit disini
class Course {
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }
    getSubject() {
        return this.subject;
    }
    getAttendance() {
        return this.attendance;
    }
    decreaseQuota() {
        this.quota--;
    }
}

class CourseOffering {
    constructor(course) {
        this.course = course;
        this.attendance = 0;
        this.grade = 0;
    }
}

class Student {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseOfferings = [];
    }
    
    takeNewCourse(course) {
        this.courseOfferings.push(new CourseOffering(course))
        // console.log(this.courseOfferings.length)

        if(course ===  biology){ // 
            console.log(course) // course nya itu dalam bentuk objek 
        }
        // console.log(this.courseOfferings)

        course.decreaseQuota()
    }

    courseAttendance(course) {
       
        let indexDaricouseOfferings = this.cariIndexkeBerapa(course)
        this.courseOfferings[indexDaricouseOfferings].attendance++
    }
        cariIndexkeBerapa(course) {
                let x = -1 // supaya nanti di array[-1] ga ketemu apa apa misal emng ga ktemu di coures apa

            for(let i = 0; i < this.courseOfferings.length;i++){
                    if (this.courseOfferings[i].course.subject === course.subject){
                        x = i
                    }}
            return x}

    takeATest(course){
        const indexDaricouseOfferings = this.cariIndexkeBerapa(course);
        if (this.courseOfferings[indexDaricouseOfferings].attendance >= course.getAttendance())
        {
            this.courseOfferings[indexDaricouseOfferings].grade = Math.floor(Math.random() * 80)
        } 
        else {
            console.log("please fill your absent") }}   
    }

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);