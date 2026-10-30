#!/bin/sh
set -eu
# Only public site files belong in the Pages artifact.
site_output="${1:-_site}"
mkdir -p "$site_output"
cp index.html "$site_output/"
for directory in src page-ghostreader page-sonar; do
  mkdir -p "$site_output/$directory"
  rsync -a --exclude='.DS_Store' "$directory/" "$site_output/$directory/"
done
for file in CNAME robots.txt sitemap.xml; do
  if [ -f "$file" ]; then cp "$file" "$site_output/"; fi
done
