import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { jsPDF } from 'jspdf';
import htm2canvas from 'html2canvas';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.scss']
})
export class PurchasedComponent {
  purchasedTicketsList: any[] = [];

  constructor(private service: MoviesService, private userService: PeopleService) {
    console.log(this.userService.personDetails)
    this.userService.personDetails.purchasedMovies.forEach((item) => {
      this.purchasedTicketsList.push({ movie: this.service.getMovieDetailsById(item.id), ticketInfo: item.details });
    });
  }

  downloadAsPDF(title: string, id: string) {
    let content: any | null = document.getElementById(`item-${id}`);

    htm2canvas(content, {
      scale: 2,
      useCORS: true
    }).then(canvas => {
      let fileWidth = content.width + 1000;
      let fileHeight = content.height + 800;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', [600, 1200]);
      pdf.addImage(imgData, 'PNG', 25, 10, fileWidth, fileHeight); // Adjust coordinates for positioning
      pdf.save(`${title}_Movie_Ticket.pdf`);
    })
  }
}
