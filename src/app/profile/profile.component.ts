import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../b2c-config';

// const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me'; // Prod graph endpoint. Uncomment to use.
const GRAPH_ENDPOINT = apiConfig.uri;

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
}
