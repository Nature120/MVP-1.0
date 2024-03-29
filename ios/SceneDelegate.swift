//
//  SceneDelegate.swift
//  Nature120
//
//  Created by Estiven Gonzalez on 13.10.2022.
//

import Foundation
import FBSDKCoreKit
import FBSDKLoginKit

@available(iOS 13.0, *)
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url else {
        return
    }

    ApplicationDelegate.shared.application(
        UIApplication.shared,
        open: url,
        sourceApplication: nil,
        annotation: [UIApplication.OpenURLOptionsKey.annotation]
    )
}
