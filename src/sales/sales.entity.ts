import {Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from 'typeorm'; 

@Entity()
export class Sales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName : string;

    @Column()
    age : number;
    
    @Column()
    height: number;

    @Column()
    gender: string;

    @Column()
    sales: number;

    @Column()
    lastPurchaseDate: string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted Sale ', this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated Sale ', this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed Sale ', this.id)
    }
}