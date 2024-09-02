import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { Status } from '../enum/status.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';
import { Appointment } from 'src/appointments/appointments.entity';
import { Sucursal } from '../sucursales/sucursales.entity';
import { Vehiculos } from '../enum/vehiculos.enum';

@Entity({ name: 'services' })
export class Service {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string = uuid();

  @Column()
  @IsString()
  @IsNotEmpty()
  type: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  image: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @Column({ default: Status.Active })
  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;

  @Column()
  @IsEnum(Vehiculos)
  @IsNotEmpty()
  vehiculo: Vehiculos;

  @ManyToMany(() => Appointment, (appointment) => appointment.service)
  appointments: Appointment[];

  @ManyToMany(() => Sucursal, (sucursal) => sucursal.services)
  @JoinTable()
  sucursales: Sucursal[];
}
