import { Injectable } from '@angular/core';

@Injectable()
export class CompaniesService {
    getCompanies() {
        return [
            {

                name: "Szabó zrt",
                category: "Üveges",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Lakatos bt",
                category: "Lakatos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Tata",
                rank: "-1"
            },
            {
                name: "Zrínyi zrt",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Hegyeshalom",
                rank: "-1"
            },
            {
                name: "Iparos bt",
                category: "Zenész",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Mosonmagyaróvár",
                rank: "-1"
            },
            {
                name: "Csabi kft",
                category: "Lakatos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner2.gif",
                url: "http://google.com",
                color: "orange",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Test name",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Győr",
                rank: "1"
            }, {

                name: "Something apk",
                category: "Autószerelő",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "New York bt",
                category: "Lakatos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Frizbi bt",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Tata",
                rank: "-1"
            }, {

                name: "Szabó",
                category: "Üveges",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Hegyeshalom",
                rank: "-1"
            },
            {
                name: "Csenti bt",
                category: "Bádogos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Mosonmagyaróvár",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Hegyeshalom",
                rank: "-1"
            }, {

                name: "Szabó",
                category: "Üveges",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Mosonmagyaróvár",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Építész",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Tata",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Győr",
                rank: "-1"
            }, {

                name: "Szabó",
                category: "IT",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Lakatos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Hegyeshalom",
                rank: "-1"
            }, {

                name: "Szabó",
                category: "Üveges",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Mosonmagyaróvár",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Lakatos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Győr",
                rank: "-1"
            }, {

                name: "Szabó",
                category: "Üveges",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner3.jpg",
                url: "http://google.com",
                color: "white",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Lakatos",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:red%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "http://csalatorre.net/wp-content/uploads/2015/06/bannerino-260x180.jpg",
                url: "http://google.com",
                color: "orange",
                city: "Győr",
                rank: "-1"
            },
            {
                name: "Szabó",
                category: "Bútoros",
                location: "https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=15&size=260x180&scale=1&markers=color:yellow%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyD07IpfK7lHGLY206RLMmVyyP-X3xr_3Ws",
                image: "assets/img/banner1.jpg",
                url: "http://f1.com",
                color: "teal",
                city: "Győr"
            }];
    }
}