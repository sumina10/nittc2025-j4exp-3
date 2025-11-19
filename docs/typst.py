import os
import sys
import pathlib
from typing import List, Dict, Tuple

# List up directories to be documented
docs_dir = pathlib.Path(__file__).parent
base_dir = pathlib.Path(__file__).parent.parent
output_dir = docs_dir / "_build"

import_ext = [
    '*.py',
    '*.html'
]

exclude_dirs = [
    'migrations',
    'docs',
    '__pycache__',
    '.git',
    'venv',
    '.idea',
]

exclude_files = [
    '__pycache__',
    '.pyc',
    '.pyo',
]


def should_exclude(path: pathlib.Path) -> bool:
    """パスが除外対象かチェック"""
    # 除外ディレクトリをチェック
    for exclude in exclude_dirs:
        if exclude in path.parts:
            return True
    # 除外ファイルをチェック
    for exclude in exclude_files:
        if exclude in path.name:
            return True
    return False


def get_directory_structure(root_dir: pathlib.Path) -> Dict[str, List]:
    """
    ディレクトリ構造を辞書形式で取得
    
    Returns:
        {
            'directories': [{'name': 'dir_name', 'path': Path, 'children': {...}}],
            'files': [{'name': 'file_name', 'path': Path, 'ext': '.py'}]
        }
    """
    structure = {'directories': [], 'files': []}
    
    try:
        for item in sorted(root_dir.iterdir()):
            if should_exclude(item):
                continue
            
            if item.is_dir():
                child_structure = get_directory_structure(item)
                files = len(child_structure['files'])
                structure['directories'].append({
                    'name': item.name,
                    'path': item,
                    'children': child_structure
                })
            elif item.is_file():
                # 対象ファイル拡張子をチェック
                if any(item.match(ext) for ext in import_ext):
                    structure['files'].append({
                        'name': item.name,
                        'path': item,
                        'ext': item.suffix,
                        'relative_path': item.relative_to(base_dir)
                    })
    except PermissionError:
        pass
    
    return structure


def generate_typst_toctree(structure: Dict, indent: int = 0) -> str:
    """
    ディレクトリ構造からTypst形式のtocを生成
    """
    output = []
    indent_str = "  " * indent
    
    # ディレクトリを処理
    for dir_info in structure['directories']:
        dir_name = dir_info['name']
        output.append(f"{indent_str}- {dir_name}/")
        
        # 子要素を再帰的に処理
        child_output = generate_typst_toctree(dir_info['children'], indent + 1)
        if child_output:
            output.append(child_output)
    
    # ファイルを処理
    for file_info in structure['files']:
        file_name = file_info['name']
        output.append(f"{indent_str}- {file_name}")
    
    return "\n".join(output)

def generate_typst_listings(structure: Dict) -> str:
    """
    ディレクトリ構造からTypstのlistingsセクションを生成
    """
    output = []

    # output_dirから見たbase_dirへの相対パスを計算
    base_relative_path = os.path.relpath(base_dir, output_dir)
    
    for file_info in structure['files']:
        file_path = file_info['relative_path']

        output.append(f"= `{file_info['name']}`")
        output.append(f"#raw(read(\"{base_relative_path}/{file_path}\"), lang: \"{file_info['ext'][1:]}\")")
    
    for dir_info in structure['directories']:
        child_output = generate_typst_listings(dir_info['children'])
        if child_output:
            output.append(child_output)
    
    return "\n".join(output)


def generate_typst_document(structure: Dict) -> str:
    """
    ディレクトリ構造からTypstのドキュメントを生成
    """
    doc = []
    doc.append("#set text(font: \"A P-SK IshiiGothic StdN R\")")
    doc.append("= Directory Tree\n")
    doc.append("```")
    doc.append(generate_typst_toctree(structure))
    doc.append("```\n")

    doc.append("= File Listings\n")
    doc.append(generate_typst_listings(structure))
    
    return "\n".join(doc)

def save_document(content: str, output_path: pathlib.Path):
    """ドキュメントをファイルに保存"""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(content, encoding='utf-8')
    print(f"Generated document: {output_path}")


if __name__ == "__main__":
    # ディレクトリ構造を取得
    print(f"Scanning directory: {base_dir}")
    structure_dir = get_directory_structure(base_dir)
    
    # Typstドキュメントを生成
    typst_doc = generate_typst_document(structure_dir)
    typst_output = pathlib.Path(docs_dir / "_build/project_structure.typ")
    save_document(typst_doc, typst_output)
    
    



