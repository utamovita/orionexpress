import { type SchemaTypeDefinition } from "sanity";
import { branchType } from "./contactPage/branch";
import { teamMemberType } from "./contactPage/teamMember";
import { galleryPostType } from "@sanity/schemaTypes/galleryPage/gallery-post";
import { galleryImageType } from "@sanity/schemaTypes/galleryPage/gallery-image";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [branchType, teamMemberType, galleryPostType, galleryImageType]
};
