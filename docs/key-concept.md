# WooCommerce Access Passes - Complete Documentation

## Overview

WooCommerce Access Passes is a powerful WordPress/WooCommerce plugin that transforms your store into a sophisticated time-based access management system. Perfect for digital products, memberships, courses, and subscription-like services without the complexity of recurring billing.

## 🚀 Key Features

### 1. **Stackable Time-Based Access**

- Purchase products that grant access for specific durations (days, weeks, months)
- Multiple purchases automatically stack to extend access periods
- No overlapping subscriptions - just cumulative access time

### 2. **Flexible Access Groups**

- **Access Groups**: Bundle multiple products under shared access timers
- **Standalone Products**: Independent access timers for individual products
- Mix and match products within the same group for extended access

### 3. **Guest-Friendly Purchase Flow**

- Automatic account creation for guest purchasers
- Seamless access management without forcing user registration
- Email-based access tracking and notifications

### 4. **Advanced Order Processing**

- Automatic access granting upon successful payment
- Refund handling with access revocation
- Failed payment protection and retry logic

### 5. **Comprehensive Admin Management**

- Intuitive user access overview dashboard
- Bulk access management tools
- Real-time access status monitoring
- Detailed access history tracking

### 6. **Powerful REST API**

- Full programmatic access to user data
- Integration with external systems
- Webhook support for real-time updates
- Email-based user lookup

### 7. **Smart Webhook System**

- Outgoing webhooks for access changes
- Incoming webhook processing for external integrations
- Configurable SSL verification
- Secure API key authentication

### 8. **User-Friendly Frontend**

- Clean My Account dashboard integration
- Access status visibility for customers
- Mobile-responsive design
- Clear expiration date display

## 💡 Why Choose WooCommerce Access Passes?

### **Simplicity Over Complexity**

Unlike traditional subscription plugins that require complex recurring billing setups, Access Passes uses simple one-time purchases that grant time-based access. Perfect for:

- Digital courses with lifetime access
- Premium content with extended access periods
- Software licenses with time-limited usage
- Membership sites without recurring hassles

### **Stack-First Architecture**

The unique stacking system means customers can:

- Buy additional time whenever they want
- Extend access without worrying about overlaps
- Purchase different products in the same group for cumulative benefits
- Avoid subscription fatigue and payment failures

### **Developer-Friendly**

- Clean, well-documented codebase
- Extensive hook system for customization
- RESTful API for integrations
- Follows WordPress and WooCommerce best practices

### **Business Growth Ready**

- Scales with your store growth
- License management via Lemon Squeezy
- Automatic updates and security patches
- Professional support and documentation

## 🔧 Key Technical Capabilities

### **Access Management Engine**

- **Core Class**: `WAP_Access_Manager`
- **Capabilities**: Add/subtract access days, calculate expiry dates, maintain detailed history
- **Storage**: Efficient user meta storage with nested arrays
- **Performance**: Optimized for high-volume stores

### **Order Integration**

- **Core Class**: `WAP_Order_Handler`
- **Capabilities**: Seamless WooCommerce integration, guest account creation, payment status handling
- **Automation**: Automatic access granting and revocation
- **Reliability**: Built-in error handling and logging

### **Product Configuration**

- **Core Class**: `WAP_Admin_Product`
- **Capabilities**: Per-product access day configuration, group assignment interface
- **Flexibility**: Support for both grouped and standalone products
- **User Experience**: Intuitive admin interface

### **API & Webhooks**

- **Core Class**: `WAP_Webhook_Handler`
- **Capabilities**: Full REST API, incoming/outgoing webhooks, secure authentication
- **Endpoints**: User status, group management, bulk operations
- **Security**: API key authentication, capability-based access control

## 🎯 Perfect Use Cases

### **Online Education**

- Course access that stacks with additional purchases
- Bundle courses in access groups for comprehensive learning paths
- Automatic access management without subscription complexity

### **Digital Products**

- Software with time-limited licenses
- Premium content with stackable access periods
- Digital downloads with extended access windows

### **Membership Sites**

- Community access without recurring billing
- Tiered membership levels through access groups
- Guest-friendly joining process

### **Professional Services**

- Time-based service access
- Client portal management
- Project-based access control

## 🔒 Security & Reliability

### **Data Protection**

- Secure user meta storage
- Encrypted API communications
- Capability-based admin access
- Regular security updates

### **Performance Optimization**

- Efficient database queries
- Optimized meta data structure
- Minimal server resource usage
- Caching-friendly architecture

### **Error Handling**

- Comprehensive logging system
- Graceful failure recovery
- Admin notification system
- Debugging tools for developers

## 🎨 User Experience

### **Customer-Facing Features**

- Clean My Account integration
- Clear access status display
- Mobile-responsive design
- Intuitive access management

### **Admin Experience**

- Comprehensive user management dashboard
- Bulk operations support
- Real-time status monitoring
- Detailed access history

### **Setup & Configuration**

- Guided onboarding wizard
- One-click license activation
- Automatic plugin updates
- Comprehensive settings panel

## 🚀 Getting Started

### **Installation Requirements**

- WordPress 5.0+
- WooCommerce 3.0+
- PHP 7.4+
- Valid license key

### **Quick Setup**

1. Install and activate the plugin
2. Run the onboarding wizard
3. Configure your first access group
4. Set up products with access days
5. Start selling time-based access!

### **Advanced Configuration**

- Configure webhook endpoints
- Set up API integrations
- Customize access group structures
- Enable advanced logging

## 📊 Reporting & Analytics

### **Access Tracking**

- Detailed user access history
- Group-based analytics
- Purchase pattern analysis
- Expiration monitoring

### **Business Insights**

- Customer lifetime value tracking
- Access renewal patterns
- Popular access group analysis
- Revenue optimization data

---

**WooCommerce Access Passes** - Transform your WooCommerce store into a powerful time-based access management system. Simple for users, powerful for businesses, and flexible for developers.

_Ready to revolutionize how you sell digital access? Get started today!_
