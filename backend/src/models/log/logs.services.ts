import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Log } from './entities/logs.entity';
import { LogRO } from './interfaces/logs.ro';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private readonly logsRepository: Repository<Log>,
  ) {}

  /**
   * It returns a promise that resolves to an array of Log objects
   * @returns An array of Logs
   */
  public async findAll(): Promise<Log[]> {
    return await this.logsRepository.find();
  }

  /**
   * It finds a log by its id and returns it as a response object
   * @param {number} id - number - the id of the log we want to find
   * @returns A LogRO object
   */
  public async findById(id: number): Promise<LogRO> {
    return (await this.logsRepository.findOneOrFail(id)).toResponseObject();
  }

  /**
   * It creates a new log and saves it to the database
   * @param {LogRO} log - LogRO - this is the object that is passed in from the controller.
   * @returns LogRO
   */
  public async create(log: LogRO): Promise<Log | any> {
    const newLog = this.logsRepository.create(log);
    await newLog.save();
    return newLog;
  }

  /**
   * It finds a log by id, updates it with the new value, and returns the updated log
   * @param {number} id - number - The id of the log we want to update.
   * @param {Log} newValue - Log - This is the new value that we want to update the log with.
   * @returns The updated log
   */
  public async update(id: number, newValue: Log): Promise<LogRO | null> {
    const log = await this.logsRepository.findOneOrFail(id);
    if (!log.id) {
      // tslint:disable-next-line:no-console
      console.error("log doesn't exist");
    }
    const newLog = this.logsRepository.create(newValue);
    await this.logsRepository.update(id, newLog);
    const find = await this.logsRepository.findOne(id);
    return find.toResponseObject();
  }

  /**
   * It deletes a log from the database
   * @param {number} id - number - The id of the log to delete
   * @returns DeleteResult
   */
  public async delete(id: number): Promise<DeleteResult> {
    return await this.logsRepository.delete(id);
  }
}
