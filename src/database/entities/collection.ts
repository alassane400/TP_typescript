import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Collection"})
export class Collection {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  nb_tomes: number

  @Column()
  author: string

  @Column()
  price: number

  @Column()
  mark: number

  constructor(id:number, name: string, nb_tomes: number, author: string, price: number, mark: number){
    this.id = id
    this.name = name
    this.nb_tomes = nb_tomes
    this.author = author
    this.price = price
    this.mark = mark
  }
}
