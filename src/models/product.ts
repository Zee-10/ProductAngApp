export class Product{
id : number;
title: string;
price: number;
description: string;
catergory: string;
}

constructor(id : number, title: string, price: number, description: string, catergory: string) {
  this.id = id;
  this.title = title;
  this.price = price;
  this.description = description;
  this.catergory = catergory;
}
