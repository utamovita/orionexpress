import { type SchemaTypeDefinition } from "sanity"
import { branchType } from "./branch"
import { teamMemberType } from "./teamMember"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [branchType, teamMemberType],
}
