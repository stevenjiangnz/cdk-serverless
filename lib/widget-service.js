"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@aws-cdk/core");
const apigateway = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const s3 = require("@aws-cdk/aws-s3");
class WidgetService extends core.Construct {
    constructor(scope, id) {
        super(scope, id);
        const bucket = new s3.Bucket(this, "WidgetStore");
        const handler = new lambda.Function(this, "WidgetHandler", {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.asset("resources"),
            handler: "widgets.main",
            environment: {
                BUCKET: bucket.bucketName
            }
        });
        bucket.grantReadWrite(handler); // was: handler.role);
        const api = new apigateway.RestApi(this, "widgets-api", {
            restApiName: "Widget Service",
            description: "This service serves widgets."
        });
        const getWidgetsIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' }
        });
        api.root.addMethod("GET", getWidgetsIntegration); // GET /
    }
}
exports.WidgetService = WidgetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aWRnZXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUN0QyxzREFBc0Q7QUFDdEQsOENBQThDO0FBQzlDLHNDQUFzQztBQUV0QyxNQUFhLGFBQWMsU0FBUSxJQUFJLENBQUMsU0FBUztJQUMvQyxZQUFZLEtBQXFCLEVBQUUsRUFBVTtRQUMzQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDekQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVU7YUFDMUI7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1FBRXRELE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3RELFdBQVcsRUFBRSxnQkFBZ0I7WUFDN0IsV0FBVyxFQUFFLDhCQUE4QjtTQUM1QyxDQUFDLENBQUM7UUFFSCxNQUFNLHFCQUFxQixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtZQUN0RSxnQkFBZ0IsRUFBRSxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFO1NBQ3BFLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsUUFBUTtJQUM1RCxDQUFDO0NBQ0Y7QUE1QkQsc0NBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29yZSBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIjtcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tIFwiQGF3cy1jZGsvYXdzLWxhbWJkYVwiO1xuaW1wb3J0ICogYXMgczMgZnJvbSBcIkBhd3MtY2RrL2F3cy1zM1wiO1xuXG5leHBvcnQgY2xhc3MgV2lkZ2V0U2VydmljZSBleHRlbmRzIGNvcmUuQ29uc3RydWN0IHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNvcmUuQ29uc3RydWN0LCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgIGNvbnN0IGJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJXaWRnZXRTdG9yZVwiKTtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiV2lkZ2V0SGFuZGxlclwiLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTBfWCwgLy8gU28gd2UgY2FuIHVzZSBhc3luYyBpbiB3aWRnZXQuanNcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmFzc2V0KFwicmVzb3VyY2VzXCIpLFxuICAgICAgaGFuZGxlcjogXCJ3aWRnZXRzLm1haW5cIixcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIEJVQ0tFVDogYnVja2V0LmJ1Y2tldE5hbWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1Y2tldC5ncmFudFJlYWRXcml0ZShoYW5kbGVyKTsgLy8gd2FzOiBoYW5kbGVyLnJvbGUpO1xuXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCBcIndpZGdldHMtYXBpXCIsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiBcIldpZGdldCBTZXJ2aWNlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHNlcnZpY2Ugc2VydmVzIHdpZGdldHMuXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldFdpZGdldHNJbnRlZ3JhdGlvbiA9IG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGhhbmRsZXIsIHtcbiAgICAgIHJlcXVlc3RUZW1wbGF0ZXM6IHsgXCJhcHBsaWNhdGlvbi9qc29uXCI6ICd7IFwic3RhdHVzQ29kZVwiOiBcIjIwMFwiIH0nIH1cbiAgICB9KTtcblxuICAgIGFwaS5yb290LmFkZE1ldGhvZChcIkdFVFwiLCBnZXRXaWRnZXRzSW50ZWdyYXRpb24pOyAvLyBHRVQgL1xuICB9XG59Il19