/**
* This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
*
* Do not edit this file as changes may cause incorrect behavior and will be lost
* once the code is regenerated.
*
* @generated by codegen project: GenerateComponentHObjCpp.js
*/

#import <Foundation/Foundation.h>
#import <React/RCTDefines.h>
#import <React/RCTLog.h>

NS_ASSUME_NONNULL_BEGIN

@protocol RCTRNSFullWindowOverlayViewProtocol <NSObject>

@end

@protocol RCTRNSScreenContainerViewProtocol <NSObject>

@end

@protocol RCTRNSScreenViewProtocol <NSObject>

@end

@protocol RCTRNSScreenNavigationContainerViewProtocol <NSObject>

@end

@protocol RCTRNSScreenStackHeaderConfigViewProtocol <NSObject>

@end

@protocol RCTRNSScreenStackHeaderSubviewViewProtocol <NSObject>

@end

@protocol RCTRNSScreenStackViewProtocol <NSObject>

@end

@protocol RCTRNSSearchBarViewProtocol <NSObject>
- (void)blur;
- (void)focus;
- (void)clearText;
- (void)toggleCancelButton:(BOOL)flag;
- (void)setText:(NSString *)text;
@end

RCT_EXTERN inline void RCTRNSSearchBarHandleCommand(
  id<RCTRNSSearchBarViewProtocol> componentView,
  NSString const *commandName,
  NSArray const *args)
{
  if ([commandName isEqualToString:@"blur"]) {
#if RCT_DEBUG
  if ([args count] != 0) {
    RCTLogError(@"%@ command %@ received %d arguments, expected %d.", @"RNSSearchBar", commandName, (int)[args count], 0);
    return;
  }
#endif

  

  [componentView blur];
  return;
}

if ([commandName isEqualToString:@"focus"]) {
#if RCT_DEBUG
  if ([args count] != 0) {
    RCTLogError(@"%@ command %@ received %d arguments, expected %d.", @"RNSSearchBar", commandName, (int)[args count], 0);
    return;
  }
#endif

  

  [componentView focus];
  return;
}

if ([commandName isEqualToString:@"clearText"]) {
#if RCT_DEBUG
  if ([args count] != 0) {
    RCTLogError(@"%@ command %@ received %d arguments, expected %d.", @"RNSSearchBar", commandName, (int)[args count], 0);
    return;
  }
#endif

  

  [componentView clearText];
  return;
}

if ([commandName isEqualToString:@"toggleCancelButton"]) {
#if RCT_DEBUG
  if ([args count] != 1) {
    RCTLogError(@"%@ command %@ received %d arguments, expected %d.", @"RNSSearchBar", commandName, (int)[args count], 1);
    return;
  }
#endif

  NSObject *arg0 = args[0];
#if RCT_DEBUG
  if (!RCTValidateTypeOfViewCommandArgument(arg0, [NSNumber class], @"boolean", @"RNSSearchBar", commandName, @"1st")) {
    return;
  }
#endif
  BOOL flag = [(NSNumber *)arg0 boolValue];

  [componentView toggleCancelButton:flag];
  return;
}

if ([commandName isEqualToString:@"setText"]) {
#if RCT_DEBUG
  if ([args count] != 1) {
    RCTLogError(@"%@ command %@ received %d arguments, expected %d.", @"RNSSearchBar", commandName, (int)[args count], 1);
    return;
  }
#endif

  NSObject *arg0 = args[0];
#if RCT_DEBUG
  if (!RCTValidateTypeOfViewCommandArgument(arg0, [NSString class], @"string", @"RNSSearchBar", commandName, @"1st")) {
    return;
  }
#endif
  NSString * text = (NSString *)arg0;

  [componentView setText:text];
  return;
}

#if RCT_DEBUG
  RCTLogError(@"%@ received command %@, which is not a supported command.", @"RNSSearchBar", commandName);
#endif
}

NS_ASSUME_NONNULL_END