import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroesComponent implements OnInit {
  type="morning"
  price=2.55
  tolls=8.72
  date="Thu, Dec 20, 2018"
  start_time="08:50am"
  start_addr="42nd St &, Park Ave, New York, NY 10017,"
  end_time="09:15am"
  end_addr="668 5th Ave, New York, NY"
  driver="Leonardo"
  miles="1.34 miles"
  minutes="24 min"


  constructor() { 
    
  }

  ngOnInit() {
    if(this.type=="morning"){
      this.start_addr = "11 Barker Ave, White Plains, NY"
      this.end_addr = "100 Manhattanville Rd, Purchase, NY"
      this.miles = "4.36 mi"
      this.minutes = "14 min"
    }else if(this.type=="morning"){
      this.start_addr = "100 Manhattanville Rd, Purchase, NY"
      this.end_addr = "11 Barker Ave, White Plains, NY"
      this.miles = "5.86 mi"
      this.minutes = "11 min"
    }

  }

  downloadpdf(){
    console.log(document.querySelector("#htmlPage"))
    // html2canvas(document.querySelector("#htmlPage")).then(canvas => {
    //   let pdf = new jsPDF();
		// 	pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
		// 	pdf.save('html.pdf');
    // });

    var divContents = document.getElementById("htmlPage").innerHTML;
    var printWindow = window.open('', '', 'height=300,width=1200');
    printWindow.document.write('<html><head><title>DIV Contents</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    

  }

}
