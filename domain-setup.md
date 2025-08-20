# Kobek.sa Domain Setup Guide

## Current Status
✅ **Site Deployed:** https://kobek-sa.netlify.app  
❌ **Custom Domain:** Not configured yet  
🔄 **Next Steps:** Configure DNS at dnet  

## Step 1: Configure Domain in Netlify Dashboard

The Netlify dashboard is already open. Follow these steps:

1. **Go to:** https://app.netlify.com/projects/kobek-sa
2. **Click:** "Site settings" (left sidebar)
3. **Click:** "Domain management" 
4. **Click:** "Add custom domain"
5. **Enter:** `kobek.sa`
6. **Click:** "Verify" then "Add domain"
7. **Also add:** `www.kobek.sa` as an alias

## Step 2: DNS Configuration at dnet

Login to your dnet control panel and add these DNS records:

### Main Domain Record
```
Type: CNAME
Name: @ (or blank)
Value: kobek-sa.netlify.app
TTL: 3600
```

### WWW Subdomain Record  
```
Type: CNAME
Name: www
Value: kobek-sa.netlify.app
TTL: 3600
```

## Step 3: Verification Commands

After configuring DNS, run these commands to verify:

```bash
# Check if domain resolves
nslookup kobek.sa

# Check if site is accessible
curl -I https://kobek.sa

# Check DNS propagation globally
# Visit: https://www.whatsmydns.net/#CNAME/kobek.sa
```

## Expected Timeline
- **DNS Propagation:** 5-60 minutes
- **SSL Certificate:** Automatic after DNS is configured
- **Final Result:** https://kobek.sa will show your Arabic coffee landing page

## Troubleshooting

If the domain doesn't work after 1 hour:
1. Double-check the CNAME records at dnet
2. Ensure the value is exactly: `kobek-sa.netlify.app`
3. Clear your browser cache
4. Try accessing from a different device/network

---

**Your site is ready!** Just complete the DNS configuration at dnet and you'll be live at kobek.sa
