import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
  private productRepository: Repository<Product>
){}
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
  const product = this.productRepository.save(createProductDto)
  return product;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    const product = this.productRepository.findOneBy({
      productId: id,
    })
    if (!product) throw new NotFoundException ()
      return product;
  }

  findByProvider(id: string) {
    const product = this.products.filter((product) => product.provider === id)[0]; 
    if (!product) throw new NotFoundException();
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.preload({
      productId: id,
      ...updateProductDto
    })
    if (!productToUpdate) throw new NotFoundException()
      this.productRepository.save(productToUpdate);
    return productToUpdate;

  }

  remove(id: string) {
    return this.productRepository.delete({
      productId: id,
    })
    return {
      message: `objeto con id ${id} eliminado`
    }
  }
}


