import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Video } from "src/video/video.entity"
@Entity()
export class Playlist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default: false})
    public: boolean;
    
    @ManyToOne(() => User, owner => owner.playlists, { eager: true })
    owner: User;

    // @ManyToMany(() => Video)
    // @JoinTable()

    // videos: Video[];

    @ManyToMany(
        () => User, (follower) => follower.followed, { cascade: true }
    )
    @JoinTable()
    followers: User[];

    async checkIfPublic(): Promise<boolean> {
        return this.public;
    }

    async checkIfFollowed(user: User): Promise<boolean> {
        const find = this.followers.filter(e => e.id === user.id)
        if(find.length === 0) {
            return false
        }
        return true;
    }
}