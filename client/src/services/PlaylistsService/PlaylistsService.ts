import { APIService } from 'services/APIService';
import { CreatePlaylistI, FollowPlaylistI } from './PlaylistsService.types';

export const getPlaylists = () => APIService.get('playlist');

export const getPublicPlaylists = () => APIService.get('playlist/public');

export const getFollowedPlaylists = () => APIService.get('playlist/followed');

export const createPlaylist = (payload: CreatePlaylistI) => APIService.post('playlist/create', { ...payload });

export const followPlaylist = (payload: FollowPlaylistI) => APIService.post(`playlist/follow/${payload.id}`);

export const unfollowPlaylist = (payload: FollowPlaylistI) => APIService.post(`playlist/unfollow/${payload.id}`);
