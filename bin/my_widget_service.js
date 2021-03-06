#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const my_widget_service_stack_1 = require("../lib/my_widget_service-stack");
const app = new cdk.App();
new my_widget_service_stack_1.MyWidgetServiceStack(app, 'MyWidgetServiceStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlfd2lkZ2V0X3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteV93aWRnZXRfc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLDRFQUFzRTtBQUV0RSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLDhDQUFvQixDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgTXlXaWRnZXRTZXJ2aWNlU3RhY2sgfSBmcm9tICcuLi9saWIvbXlfd2lkZ2V0X3NlcnZpY2Utc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IE15V2lkZ2V0U2VydmljZVN0YWNrKGFwcCwgJ015V2lkZ2V0U2VydmljZVN0YWNrJyk7XG5cbiJdfQ==