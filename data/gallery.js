import { G } from "./services";
const gc = [G("#ff4d1f", "#222120"), G("#222120", "#6b6760"), G("#e8b84a", "#ff4d1f"), G("#6b2d1d", "#ff8a63"), G("#3a3835", "#ff4d1f"), G("#8a857b", "#222120")];
const raw = [["Logo", "big"], ["Poster", "t"], ["Standee", "t"], ["Social", "w"], ["Brochure", ""], ["Ad", ""], ["Website", "w"], ["UI screen", "t"], ["Thumbnail", ""], ["Motion", "w"]];
export const gallery = raw.map(([label, span], i) => ({ label, span, bg: gc[i % 6] }));
