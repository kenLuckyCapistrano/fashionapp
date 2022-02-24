import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Sales {
    @PrimaryGeneratedColumn()
    id: number;
}