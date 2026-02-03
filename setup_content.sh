#!/bin/bash
# Script to populate quartz/content with symlinks from Docs and create index.md

SOURCE_DIR="Docs"
DEST_DIR="content"

# Remove existing content directory/symlink
rm -rf "$DEST_DIR"
mkdir -p "$DEST_DIR"

# Symlink all files and folders from SOURCE_DIR to DEST_DIR
# We use find to avoid standard glob expansion issues and skipped hidden files if needed
# But for simplicity, we can just iterate.

echo "Symlinking content from $SOURCE_DIR..."

# Use cp -rs if available, otherwise manual loop.
# cp -rs creates symlinks recursively.
# We need to resolve absolute path of SOURCE_DIR for symlinks to work robustly, 
# or use correct relative path. 
# SOURCE_DIR is ../../Docs (relative to quartz/)

# Let's verify absolute path of Docs
ABS_SOURCE=$(realpath "$SOURCE_DIR")
if [ -z "$ABS_SOURCE" ]; then
  echo "Error: Docs directory not found at $SOURCE_DIR"
  exit 1
fi

echo "Source: $ABS_SOURCE"

# Create copies (dereferencing symlinks from source if any)
# We copy children of Docs into content
# -r: recursive
# -L: dereference symlinks in source (so we get actual files)
cp -rL "$ABS_SOURCE"/* "$DEST_DIR"/

# If Home.md is copied, copy it to index.md
if [ -f "$DEST_DIR/Home.md" ]; then
    echo "Copying Home.md to index.md"
    cp "$DEST_DIR/Home.md" "$DEST_DIR/index.md"
else
    echo "Warning: Home.md not found in content."
fi

echo "Content setup complete."
