import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {  // AppREsolver -> AppResolver
    @Query(() => String)
    public sayHello(): string {
        return "GraphQL API Server";
    }
}

