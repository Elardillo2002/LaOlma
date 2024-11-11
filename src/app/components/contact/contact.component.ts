import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    form: FormGroup = this.fb.group({
        from_name: '',
        to_name: 'Admin',
        from_email: '',
        subject: '',
        message: ''
    });

    constructor(private fb: FormBuilder) {}

    send() {
        emailjs.send("service_20tnx8i","template_f57nw5c",{
            from_name: "La Olma Asociación Medioambiental",
            subject: "",
            message: "Hola buenos días aquí el mensaje default",
        });
    }
}