import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // const serverURLParam: number = parseInt(
    //   this.route.snapshot.paramMap.get('id'),
    //   10
    // );
    // this.server = this.serversService.getServer(serverURLParam);
    this.route.paramMap.subscribe((params) => {
      const serverId: number = parseInt(params.get('id'), 10);
      this.server = this.serversService.getServer(serverId);
    });
  }

  onEdit() {
    this.router.navigate(['servers', this.server.id, 'edit'], {
      queryParams: { allowEdit: true },
    });
  }
}
