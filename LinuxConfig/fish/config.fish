export PNPM_HOME="~/.local/share/nvm/v18.4.0/bin/pnpm"
#if status --is-interactive
#  ""
#end


# Create the default command_not_found handler
function __fish_default_command_not_found_handler
    printf (_ "fish: Unknown command: %s\n") (string escape -- $argv[1]) >&2
end


if not status --is-interactive
    # Hook up the default as the command_not_found handler
    # if we are not interactive to avoid custom handlers.
    function fish_command_not_found --on-event fish_command_not_found
        __fish_default_command_not_found_handler $argv
    end
end


set -g -x fish_greeting ' '

# marlin comma completion filter
set -g FILTER ''

# cursor fix
echo -e -n "\x1b[\x35 q" 2>/dev/null
echo -e -n "\e]12;cyan\a" 2>/dev/null

# Fish command history
function history
    builtin history --show-time='%F %T '
end

## Useful aliases
# Replace ls with exa
alias ls='exa -al --color=always --group-directories-first --icons' # preferred listing
alias la='exa -a --color=always --group-directories-first --icons'  # all files and dirs
alias ll='exa -l --color=always --group-directories-first --icons'  # long format
#alias lt='exa -aT --color=always --group-directories-first --icons' # tree listing
alias l.="exa -a | egrep '^\.'" 
alias l="lsd --date '+%d.%m.%Y %H:%M' -lah"

# Neofetch
alias neo="neofetch"
alias kernel="uname -rs"
alias k="uname -rs"
alias gnome="gnome-shell --version"
alias g="gnome-shell --version"
alias fedora="lsb_release -sd"
alias f="lsb_release -sd"
#alias mesa="glxinfo | grep "Core Profile""
#alias m="glxinfo | grep "Core Profile""
alias age="stat / | grep "Birth""

# Timeshift
alias tm="sudo timeshift"
alias tmc="sudo timeshift --create"
alias tmd="sudo timeshift --delete"
alias tmda="sudo timeshift --delete-all"
alias tml="sudo timeshift --list"

alias g="git"
alias clr="clear"
alias grep='grep --colour=auto'
alias n="node"
alias pn="pnpm"
alias px="pnpx"
alias vi="vim"
alias x="exit"
alias reboot="sudo reboot"
alias upd="sudo dnf upgrade --refresh -y && flatpak update -y && clean"
alias clean="sudo dnf autoremove && dnf clean all"
alias install="sudo dnf install -y"
alias remove="sudo dnf remove"
alias autoremove="sudo dnf autoremove"
alias search="sudo dnf search"
alias makecache="sudo dnf makecache"
alias refreshcache="sudo dnf makecache --refresh"
alias fishconfig "nano ~/.config/fish/config.fish"
alias kittyconfig "nano ~/.config/kitty/kitty.conf"
alias starshipconfig "nano ~/.config/starship.toml"
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias hw='hwinfo --short'
alias wipe="sudo wipe -rFc" 


# Fish Git Prompt
set -g __fish_git_prompt_showdirtystate 'yes'
set -g __fish_git_prompt_showstashstate 'yes'
set -g __fish_git_prompt_showuntrackedfiles 'yes'
set -g __fish_git_prompt_showupstream 'yes'
set -g __fish_git_prompt_show_informative_status 1
set -g __fish_git_prompt_hide_untrackedfiles 1

# Get fastest mirrors 
alias mirror="sudo reflector -f 30 -l 30 --number 10 --verbose --save /etc/pacman.d/mirrorlist" 
alias mirrord="sudo reflector --latest 50 --number 20 --sort delay --save /etc/pacman.d/mirrorlist" 
alias mirrors="sudo reflector --latest 50 --number 20 --sort score --save /etc/pacman.d/mirrorlist" 
alias mirrora="sudo reflector --latest 50 --number 20 --sort age --save /etc/pacman.d/mirrorlist" 

# Get the error messages from journalctl
alias jctl="journalctl -p 3 -xb"

#export SSH_AUTH_SOCK="$XDG_RUNTIME_DIR/ssh-agent.socket"

# Theme
set -x VIRTUAL_ENV_DISABLE_PROMPT 1
set -g theme_display_git yes
set -g theme_display_git_dirty yes
set -g theme_display_git_untracked yes
set -g theme_display_git_ahead_verbose yes
set -g theme_display_git_dirty_verbose yes
set -g theme_display_git_stashed_verbose yes
set -g theme_display_git_master_branch yes
set -g theme_git_worktree_support yes
set -g theme_display_vagrant yes
set -g theme_display_docker_machine yes
set -g theme_display_k8s_context yes
set -g theme_display_hg yes
set -g theme_display_virtualenv yes
set -g theme_display_ruby yes
set -g theme_display_user ssh
set -g theme_display_hostname ssh
set -g theme_display_vi no
set -g theme_display_nvm yes
set -g theme_avoid_ambiguous_glyphs yes
set -g theme_powerline_fonts no
set -g theme_nerd_fonts yes
set -g theme_show_exit_status yes
set -g default_user your_normal_user
set -g theme_color_scheme dark
set -g fish_prompt_pwd_dir_length 0
set -g theme_newline_cursor yes
set -g theme_display_cmd_duration yes
set -g theme_title_display_process yes
set -g theme_title_display_user yes
set -g theme_title_use_abbreviated_path no
set -g theme_date_format "+%H:%M"
set -g theme_project_dir_length 0
set -g theme_newline_prompt ' ><((°>)) 🐧 '


# Starship prompt
eval "$(starship init fish)"

# pnpm
set -gx PNPM_HOME "/home/cstrp/.local/share/pnpm"
set -gx PATH "$PNPM_HOME" $PATH
# pnpm end
