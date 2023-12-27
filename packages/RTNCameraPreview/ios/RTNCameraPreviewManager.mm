#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNCameraPreviewManager : RCTViewManager
@end

@implementation RTNCameraPreviewtManager

RCT_EXPORT_MODULE(RTNCameraPreview)

RCT_EXPORT_VIEW_PROPERTY(text, NSString)

@end