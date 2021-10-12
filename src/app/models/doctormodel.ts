
export class Doctor {
    [x: string]: any;


    id: number;
    phonenumber: string;
    name: string;
    surname: string;
    specialty: string;
    hospital: string;

    constructor(d: any) {
        this.id = d.id;
        this.phonenumber = d.phonenumber;
        this.name = d.name;
        this.surname = d.surname;
        this.specialty = d.specialty;
        this.hospital = d.hospital;
        
    }
}