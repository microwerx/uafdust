import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Palliative } from '../palliative';
import { PalliativeService } from '../palliative.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-palliative-detail',
  templateUrl: './palliative-detail.component.html',
  styleUrls: ['./palliative-detail.component.css']
})
export class PalliativeDetailComponent implements OnInit {
  @Input() palliative: Palliative;
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private palliativeService: PalliativeService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPalliative();
  }

  getUser(): void {
    if (this.palliative && this.palliative.userid > 0) {
      this.userService.getUser(this.palliative.userid).subscribe(user => this.user = user);
    }
  }

  getPalliative(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.palliativeService.getPalliative(id).subscribe(palliative => {
      this.palliative = palliative;
      this.getUser();
    });
  }

  save(): void {
    this.palliativeService.updatePalliative(this.palliative)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}