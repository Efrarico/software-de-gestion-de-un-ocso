import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: CreateProductDto[] = [
{
  productId: uuid(),
  productName: "Sabritas Normal 48g",
  price: 29,
  countSeal: 3,
  provider: uuid(),
},
{
  productId: uuid(),
  productName: "Coca cola 600ml",
  price: 40,
  countSeal: 2,
  provider: uuid(),
},
{
  productId: uuid(),
  productName: "Agua Ciel 1L",
  price: 15,
  countSeal: 2,
  provider: uuid(),
}
  ]
  create(createProductDto: CreateProductDto) {
    if (!createProductDto.productId) createProductDto.productId = uuid()
    createProductDto.productId = uuid();
    this.products.push(createProductDto);

    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.filter((product) => product.productId === id)[0]; 
    if (!product) throw new NotFoundException();
    return product;
  }

  findByProvider(id: string) {
    const product = this.products.filter((product) => product.provider === id)[0]; 
    if (!product) throw new NotFoundException();
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    let productToUpdate = this.findOne(id);
    productToUpdate = {...productToUpdate, ...updateProductDto};
    if (productToUpdate) throw new NotFoundException();{
      
    }
    this.products = this.products.map((product) => {
      if (product.productId === id) {
        product = productToUpdate; 
      }
      return product;
    });
    return productToUpdate;
  }

  remove(id: string) {
    this.findOne(id);
    this.products = this.products.filter((product) => product.productId !== id);
    return this.products;
  }
}
