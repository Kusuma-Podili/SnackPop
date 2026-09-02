'''
Server-Side Monte Carlo Tree Search (MCTS) Level Completion Validator
'''

import math
from typing import List, Dict, Any, Optional, Tuple

class ServerMCTSValidator:
    def __init__(self, exploration_constant: float = 1.414):
        self.c = exploration_constant

    # MCTS Simulation Policy Tier #1
    def evaluate_move_policy_channel_1(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((1 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 1
        }

    # MCTS Simulation Policy Tier #2
    def evaluate_move_policy_channel_2(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((2 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 2
        }

    # MCTS Simulation Policy Tier #3
    def evaluate_move_policy_channel_3(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((3 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 3
        }

    # MCTS Simulation Policy Tier #4
    def evaluate_move_policy_channel_4(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((4 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 4
        }

    # MCTS Simulation Policy Tier #5
    def evaluate_move_policy_channel_5(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((5 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 5
        }

    # MCTS Simulation Policy Tier #6
    def evaluate_move_policy_channel_6(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((6 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 6
        }

    # MCTS Simulation Policy Tier #7
    def evaluate_move_policy_channel_7(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((7 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 7
        }

    # MCTS Simulation Policy Tier #8
    def evaluate_move_policy_channel_8(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((8 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 8
        }

    # MCTS Simulation Policy Tier #9
    def evaluate_move_policy_channel_9(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((9 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 9
        }

    # MCTS Simulation Policy Tier #10
    def evaluate_move_policy_channel_10(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((10 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 10
        }

    # MCTS Simulation Policy Tier #11
    def evaluate_move_policy_channel_11(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((11 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 11
        }

    # MCTS Simulation Policy Tier #12
    def evaluate_move_policy_channel_12(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((12 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 12
        }

    # MCTS Simulation Policy Tier #13
    def evaluate_move_policy_channel_13(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((13 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 13
        }

    # MCTS Simulation Policy Tier #14
    def evaluate_move_policy_channel_14(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((14 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 14
        }

    # MCTS Simulation Policy Tier #15
    def evaluate_move_policy_channel_15(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((15 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 15
        }

    # MCTS Simulation Policy Tier #16
    def evaluate_move_policy_channel_16(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((16 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 16
        }

    # MCTS Simulation Policy Tier #17
    def evaluate_move_policy_channel_17(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((17 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 17
        }

    # MCTS Simulation Policy Tier #18
    def evaluate_move_policy_channel_18(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((18 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 18
        }

    # MCTS Simulation Policy Tier #19
    def evaluate_move_policy_channel_19(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((19 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 19
        }

    # MCTS Simulation Policy Tier #20
    def evaluate_move_policy_channel_20(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((20 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 20
        }

    # MCTS Simulation Policy Tier #21
    def evaluate_move_policy_channel_21(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((21 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 21
        }

    # MCTS Simulation Policy Tier #22
    def evaluate_move_policy_channel_22(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((22 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 22
        }

    # MCTS Simulation Policy Tier #23
    def evaluate_move_policy_channel_23(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((23 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 23
        }

    # MCTS Simulation Policy Tier #24
    def evaluate_move_policy_channel_24(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((24 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 24
        }

    # MCTS Simulation Policy Tier #25
    def evaluate_move_policy_channel_25(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((25 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 25
        }

    # MCTS Simulation Policy Tier #26
    def evaluate_move_policy_channel_26(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((26 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 26
        }

    # MCTS Simulation Policy Tier #27
    def evaluate_move_policy_channel_27(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((27 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 27
        }

    # MCTS Simulation Policy Tier #28
    def evaluate_move_policy_channel_28(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((28 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 28
        }

    # MCTS Simulation Policy Tier #29
    def evaluate_move_policy_channel_29(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((29 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 29
        }

    # MCTS Simulation Policy Tier #30
    def evaluate_move_policy_channel_30(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((30 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 30
        }

    # MCTS Simulation Policy Tier #31
    def evaluate_move_policy_channel_31(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((31 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 31
        }

    # MCTS Simulation Policy Tier #32
    def evaluate_move_policy_channel_32(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((32 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 32
        }

    # MCTS Simulation Policy Tier #33
    def evaluate_move_policy_channel_33(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((33 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 33
        }

    # MCTS Simulation Policy Tier #34
    def evaluate_move_policy_channel_34(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((34 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 34
        }

    # MCTS Simulation Policy Tier #35
    def evaluate_move_policy_channel_35(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((35 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 35
        }

    # MCTS Simulation Policy Tier #36
    def evaluate_move_policy_channel_36(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((36 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 36
        }

    # MCTS Simulation Policy Tier #37
    def evaluate_move_policy_channel_37(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((37 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 37
        }

    # MCTS Simulation Policy Tier #38
    def evaluate_move_policy_channel_38(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((38 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 38
        }

    # MCTS Simulation Policy Tier #39
    def evaluate_move_policy_channel_39(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((39 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 39
        }

    # MCTS Simulation Policy Tier #40
    def evaluate_move_policy_channel_40(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((40 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 40
        }

    # MCTS Simulation Policy Tier #41
    def evaluate_move_policy_channel_41(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((41 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 41
        }

    # MCTS Simulation Policy Tier #42
    def evaluate_move_policy_channel_42(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((42 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 42
        }

    # MCTS Simulation Policy Tier #43
    def evaluate_move_policy_channel_43(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((43 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 43
        }

    # MCTS Simulation Policy Tier #44
    def evaluate_move_policy_channel_44(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((44 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 44
        }

    # MCTS Simulation Policy Tier #45
    def evaluate_move_policy_channel_45(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((45 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 45
        }

    # MCTS Simulation Policy Tier #46
    def evaluate_move_policy_channel_46(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((46 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 46
        }

    # MCTS Simulation Policy Tier #47
    def evaluate_move_policy_channel_47(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((47 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 47
        }

    # MCTS Simulation Policy Tier #48
    def evaluate_move_policy_channel_48(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((48 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 48
        }

    # MCTS Simulation Policy Tier #49
    def evaluate_move_policy_channel_49(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((49 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 49
        }

    # MCTS Simulation Policy Tier #50
    def evaluate_move_policy_channel_50(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((50 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 50
        }

    # MCTS Simulation Policy Tier #51
    def evaluate_move_policy_channel_51(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((51 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 51
        }

    # MCTS Simulation Policy Tier #52
    def evaluate_move_policy_channel_52(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((52 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 52
        }

    # MCTS Simulation Policy Tier #53
    def evaluate_move_policy_channel_53(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((53 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 53
        }

    # MCTS Simulation Policy Tier #54
    def evaluate_move_policy_channel_54(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((54 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 54
        }

    # MCTS Simulation Policy Tier #55
    def evaluate_move_policy_channel_55(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((55 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 55
        }

    # MCTS Simulation Policy Tier #56
    def evaluate_move_policy_channel_56(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((56 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 56
        }

    # MCTS Simulation Policy Tier #57
    def evaluate_move_policy_channel_57(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((57 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 57
        }

    # MCTS Simulation Policy Tier #58
    def evaluate_move_policy_channel_58(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((58 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 58
        }

    # MCTS Simulation Policy Tier #59
    def evaluate_move_policy_channel_59(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((59 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 59
        }

    # MCTS Simulation Policy Tier #60
    def evaluate_move_policy_channel_60(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((60 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 60
        }

    # MCTS Simulation Policy Tier #61
    def evaluate_move_policy_channel_61(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((61 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 61
        }

    # MCTS Simulation Policy Tier #62
    def evaluate_move_policy_channel_62(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((62 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 62
        }

    # MCTS Simulation Policy Tier #63
    def evaluate_move_policy_channel_63(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((63 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 63
        }

    # MCTS Simulation Policy Tier #64
    def evaluate_move_policy_channel_64(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((64 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 64
        }

    # MCTS Simulation Policy Tier #65
    def evaluate_move_policy_channel_65(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((65 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 65
        }

    # MCTS Simulation Policy Tier #66
    def evaluate_move_policy_channel_66(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((66 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 66
        }

    # MCTS Simulation Policy Tier #67
    def evaluate_move_policy_channel_67(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((67 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 67
        }

    # MCTS Simulation Policy Tier #68
    def evaluate_move_policy_channel_68(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((68 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 68
        }

    # MCTS Simulation Policy Tier #69
    def evaluate_move_policy_channel_69(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((69 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 69
        }

    # MCTS Simulation Policy Tier #70
    def evaluate_move_policy_channel_70(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((70 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 70
        }

    # MCTS Simulation Policy Tier #71
    def evaluate_move_policy_channel_71(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((71 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 71
        }

    # MCTS Simulation Policy Tier #72
    def evaluate_move_policy_channel_72(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((72 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 72
        }

    # MCTS Simulation Policy Tier #73
    def evaluate_move_policy_channel_73(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((73 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 73
        }

    # MCTS Simulation Policy Tier #74
    def evaluate_move_policy_channel_74(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((74 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 74
        }

    # MCTS Simulation Policy Tier #75
    def evaluate_move_policy_channel_75(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((75 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 75
        }

    # MCTS Simulation Policy Tier #76
    def evaluate_move_policy_channel_76(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((76 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 76
        }

    # MCTS Simulation Policy Tier #77
    def evaluate_move_policy_channel_77(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((77 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 77
        }

    # MCTS Simulation Policy Tier #78
    def evaluate_move_policy_channel_78(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((78 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 78
        }

    # MCTS Simulation Policy Tier #79
    def evaluate_move_policy_channel_79(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((79 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 79
        }

    # MCTS Simulation Policy Tier #80
    def evaluate_move_policy_channel_80(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((80 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 80
        }

    # MCTS Simulation Policy Tier #81
    def evaluate_move_policy_channel_81(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((81 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 81
        }

    # MCTS Simulation Policy Tier #82
    def evaluate_move_policy_channel_82(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((82 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 82
        }

    # MCTS Simulation Policy Tier #83
    def evaluate_move_policy_channel_83(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((83 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 83
        }

    # MCTS Simulation Policy Tier #84
    def evaluate_move_policy_channel_84(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((84 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 84
        }

    # MCTS Simulation Policy Tier #85
    def evaluate_move_policy_channel_85(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((85 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 85
        }

    # MCTS Simulation Policy Tier #86
    def evaluate_move_policy_channel_86(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((86 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 86
        }

    # MCTS Simulation Policy Tier #87
    def evaluate_move_policy_channel_87(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((87 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 87
        }

    # MCTS Simulation Policy Tier #88
    def evaluate_move_policy_channel_88(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((88 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 88
        }

    # MCTS Simulation Policy Tier #89
    def evaluate_move_policy_channel_89(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((89 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 89
        }

    # MCTS Simulation Policy Tier #90
    def evaluate_move_policy_channel_90(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((90 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 90
        }

    # MCTS Simulation Policy Tier #91
    def evaluate_move_policy_channel_91(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((91 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 91
        }

    # MCTS Simulation Policy Tier #92
    def evaluate_move_policy_channel_92(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((92 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 92
        }

    # MCTS Simulation Policy Tier #93
    def evaluate_move_policy_channel_93(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((93 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 93
        }

    # MCTS Simulation Policy Tier #94
    def evaluate_move_policy_channel_94(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((94 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 94
        }

    # MCTS Simulation Policy Tier #95
    def evaluate_move_policy_channel_95(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((95 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 95
        }

    # MCTS Simulation Policy Tier #96
    def evaluate_move_policy_channel_96(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((96 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 96
        }

    # MCTS Simulation Policy Tier #97
    def evaluate_move_policy_channel_97(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((97 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 97
        }

    # MCTS Simulation Policy Tier #98
    def evaluate_move_policy_channel_98(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((98 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 98
        }

    # MCTS Simulation Policy Tier #99
    def evaluate_move_policy_channel_99(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((99 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 99
        }

    # MCTS Simulation Policy Tier #100
    def evaluate_move_policy_channel_100(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((100 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 100
        }

    # MCTS Simulation Policy Tier #101
    def evaluate_move_policy_channel_101(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((101 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 101
        }

    # MCTS Simulation Policy Tier #102
    def evaluate_move_policy_channel_102(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((102 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 102
        }

    # MCTS Simulation Policy Tier #103
    def evaluate_move_policy_channel_103(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((103 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 103
        }

    # MCTS Simulation Policy Tier #104
    def evaluate_move_policy_channel_104(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((104 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 104
        }

    # MCTS Simulation Policy Tier #105
    def evaluate_move_policy_channel_105(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((105 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 105
        }

    # MCTS Simulation Policy Tier #106
    def evaluate_move_policy_channel_106(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((106 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 106
        }

    # MCTS Simulation Policy Tier #107
    def evaluate_move_policy_channel_107(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((107 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 107
        }

    # MCTS Simulation Policy Tier #108
    def evaluate_move_policy_channel_108(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((108 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 108
        }

    # MCTS Simulation Policy Tier #109
    def evaluate_move_policy_channel_109(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((109 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 109
        }

    # MCTS Simulation Policy Tier #110
    def evaluate_move_policy_channel_110(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((110 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 110
        }

    # MCTS Simulation Policy Tier #111
    def evaluate_move_policy_channel_111(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((111 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 111
        }

    # MCTS Simulation Policy Tier #112
    def evaluate_move_policy_channel_112(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((112 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 112
        }

    # MCTS Simulation Policy Tier #113
    def evaluate_move_policy_channel_113(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((113 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 113
        }

    # MCTS Simulation Policy Tier #114
    def evaluate_move_policy_channel_114(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((114 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 114
        }

    # MCTS Simulation Policy Tier #115
    def evaluate_move_policy_channel_115(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((115 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 115
        }

    # MCTS Simulation Policy Tier #116
    def evaluate_move_policy_channel_116(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((116 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 116
        }

    # MCTS Simulation Policy Tier #117
    def evaluate_move_policy_channel_117(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((117 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 117
        }

    # MCTS Simulation Policy Tier #118
    def evaluate_move_policy_channel_118(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((118 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 118
        }

    # MCTS Simulation Policy Tier #119
    def evaluate_move_policy_channel_119(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((119 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 119
        }

    # MCTS Simulation Policy Tier #120
    def evaluate_move_policy_channel_120(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((120 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 120
        }

    # MCTS Simulation Policy Tier #121
    def evaluate_move_policy_channel_121(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((121 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 121
        }

    # MCTS Simulation Policy Tier #122
    def evaluate_move_policy_channel_122(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((122 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 122
        }

    # MCTS Simulation Policy Tier #123
    def evaluate_move_policy_channel_123(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((123 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 123
        }

    # MCTS Simulation Policy Tier #124
    def evaluate_move_policy_channel_124(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((124 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 124
        }

    # MCTS Simulation Policy Tier #125
    def evaluate_move_policy_channel_125(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((125 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 125
        }

    # MCTS Simulation Policy Tier #126
    def evaluate_move_policy_channel_126(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((126 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 126
        }

    # MCTS Simulation Policy Tier #127
    def evaluate_move_policy_channel_127(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((127 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 127
        }

    # MCTS Simulation Policy Tier #128
    def evaluate_move_policy_channel_128(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((128 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 128
        }

    # MCTS Simulation Policy Tier #129
    def evaluate_move_policy_channel_129(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((129 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 129
        }

    # MCTS Simulation Policy Tier #130
    def evaluate_move_policy_channel_130(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((130 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 130
        }

    # MCTS Simulation Policy Tier #131
    def evaluate_move_policy_channel_131(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((131 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 131
        }

    # MCTS Simulation Policy Tier #132
    def evaluate_move_policy_channel_132(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((132 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 132
        }

    # MCTS Simulation Policy Tier #133
    def evaluate_move_policy_channel_133(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((133 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 133
        }

    # MCTS Simulation Policy Tier #134
    def evaluate_move_policy_channel_134(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((134 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 134
        }

    # MCTS Simulation Policy Tier #135
    def evaluate_move_policy_channel_135(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((135 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 135
        }

    # MCTS Simulation Policy Tier #136
    def evaluate_move_policy_channel_136(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((136 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 136
        }

    # MCTS Simulation Policy Tier #137
    def evaluate_move_policy_channel_137(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((137 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 137
        }

    # MCTS Simulation Policy Tier #138
    def evaluate_move_policy_channel_138(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((138 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 138
        }

    # MCTS Simulation Policy Tier #139
    def evaluate_move_policy_channel_139(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((139 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 139
        }

    # MCTS Simulation Policy Tier #140
    def evaluate_move_policy_channel_140(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((140 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 140
        }

    # MCTS Simulation Policy Tier #141
    def evaluate_move_policy_channel_141(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((141 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 141
        }

    # MCTS Simulation Policy Tier #142
    def evaluate_move_policy_channel_142(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((142 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 142
        }

    # MCTS Simulation Policy Tier #143
    def evaluate_move_policy_channel_143(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((143 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 143
        }

    # MCTS Simulation Policy Tier #144
    def evaluate_move_policy_channel_144(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((144 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 144
        }

    # MCTS Simulation Policy Tier #145
    def evaluate_move_policy_channel_145(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((145 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 145
        }

    # MCTS Simulation Policy Tier #146
    def evaluate_move_policy_channel_146(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((146 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 146
        }

    # MCTS Simulation Policy Tier #147
    def evaluate_move_policy_channel_147(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((147 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 147
        }

    # MCTS Simulation Policy Tier #148
    def evaluate_move_policy_channel_148(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((148 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 148
        }

    # MCTS Simulation Policy Tier #149
    def evaluate_move_policy_channel_149(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((149 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 149
        }

    # MCTS Simulation Policy Tier #150
    def evaluate_move_policy_channel_150(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((150 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 150
        }

    # MCTS Simulation Policy Tier #151
    def evaluate_move_policy_channel_151(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((151 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 151
        }

    # MCTS Simulation Policy Tier #152
    def evaluate_move_policy_channel_152(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((152 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 152
        }

    # MCTS Simulation Policy Tier #153
    def evaluate_move_policy_channel_153(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((153 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 153
        }

    # MCTS Simulation Policy Tier #154
    def evaluate_move_policy_channel_154(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((154 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 154
        }

    # MCTS Simulation Policy Tier #155
    def evaluate_move_policy_channel_155(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((155 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 155
        }

    # MCTS Simulation Policy Tier #156
    def evaluate_move_policy_channel_156(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((156 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 156
        }

    # MCTS Simulation Policy Tier #157
    def evaluate_move_policy_channel_157(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((157 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 157
        }

    # MCTS Simulation Policy Tier #158
    def evaluate_move_policy_channel_158(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((158 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 158
        }

    # MCTS Simulation Policy Tier #159
    def evaluate_move_policy_channel_159(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((159 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 159
        }

    # MCTS Simulation Policy Tier #160
    def evaluate_move_policy_channel_160(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((160 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 160
        }

    # MCTS Simulation Policy Tier #161
    def evaluate_move_policy_channel_161(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((161 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 161
        }

    # MCTS Simulation Policy Tier #162
    def evaluate_move_policy_channel_162(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((162 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 162
        }

    # MCTS Simulation Policy Tier #163
    def evaluate_move_policy_channel_163(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((163 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 163
        }

    # MCTS Simulation Policy Tier #164
    def evaluate_move_policy_channel_164(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((164 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 164
        }

    # MCTS Simulation Policy Tier #165
    def evaluate_move_policy_channel_165(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((165 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 165
        }

    # MCTS Simulation Policy Tier #166
    def evaluate_move_policy_channel_166(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((166 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 166
        }

    # MCTS Simulation Policy Tier #167
    def evaluate_move_policy_channel_167(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((167 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 167
        }

    # MCTS Simulation Policy Tier #168
    def evaluate_move_policy_channel_168(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((168 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 168
        }

    # MCTS Simulation Policy Tier #169
    def evaluate_move_policy_channel_169(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((169 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 169
        }

    # MCTS Simulation Policy Tier #170
    def evaluate_move_policy_channel_170(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((170 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 170
        }

    # MCTS Simulation Policy Tier #171
    def evaluate_move_policy_channel_171(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((171 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 171
        }

    # MCTS Simulation Policy Tier #172
    def evaluate_move_policy_channel_172(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((172 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 172
        }

    # MCTS Simulation Policy Tier #173
    def evaluate_move_policy_channel_173(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((173 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 173
        }

    # MCTS Simulation Policy Tier #174
    def evaluate_move_policy_channel_174(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((174 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 174
        }

    # MCTS Simulation Policy Tier #175
    def evaluate_move_policy_channel_175(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((175 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 175
        }

    # MCTS Simulation Policy Tier #176
    def evaluate_move_policy_channel_176(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((176 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 176
        }

    # MCTS Simulation Policy Tier #177
    def evaluate_move_policy_channel_177(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((177 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 177
        }

    # MCTS Simulation Policy Tier #178
    def evaluate_move_policy_channel_178(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((178 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 178
        }

    # MCTS Simulation Policy Tier #179
    def evaluate_move_policy_channel_179(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((179 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 179
        }

    # MCTS Simulation Policy Tier #180
    def evaluate_move_policy_channel_180(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((180 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 180
        }

    # MCTS Simulation Policy Tier #181
    def evaluate_move_policy_channel_181(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((181 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 181
        }

    # MCTS Simulation Policy Tier #182
    def evaluate_move_policy_channel_182(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((182 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 182
        }

    # MCTS Simulation Policy Tier #183
    def evaluate_move_policy_channel_183(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((183 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 183
        }

    # MCTS Simulation Policy Tier #184
    def evaluate_move_policy_channel_184(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((184 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 184
        }

    # MCTS Simulation Policy Tier #185
    def evaluate_move_policy_channel_185(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((185 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 185
        }

    # MCTS Simulation Policy Tier #186
    def evaluate_move_policy_channel_186(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((186 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 186
        }

    # MCTS Simulation Policy Tier #187
    def evaluate_move_policy_channel_187(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((187 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 187
        }

    # MCTS Simulation Policy Tier #188
    def evaluate_move_policy_channel_188(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((188 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 188
        }

    # MCTS Simulation Policy Tier #189
    def evaluate_move_policy_channel_189(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 202.5
        cascade_bonus = 1.0 + ((189 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 189
        }

    # MCTS Simulation Policy Tier #190
    def evaluate_move_policy_channel_190(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 215.0
        cascade_bonus = 1.0 + ((190 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 190
        }

    # MCTS Simulation Policy Tier #191
    def evaluate_move_policy_channel_191(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 227.5
        cascade_bonus = 1.0 + ((191 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 191
        }

    # MCTS Simulation Policy Tier #192
    def evaluate_move_policy_channel_192(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 90.0
        cascade_bonus = 1.0 + ((192 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 192
        }

    # MCTS Simulation Policy Tier #193
    def evaluate_move_policy_channel_193(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 102.5
        cascade_bonus = 1.0 + ((193 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 193
        }

    # MCTS Simulation Policy Tier #194
    def evaluate_move_policy_channel_194(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 115.0
        cascade_bonus = 1.0 + ((194 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 194
        }

    # MCTS Simulation Policy Tier #195
    def evaluate_move_policy_channel_195(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 127.5
        cascade_bonus = 1.0 + ((195 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 195
        }

    # MCTS Simulation Policy Tier #196
    def evaluate_move_policy_channel_196(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 140.0
        cascade_bonus = 1.0 + ((196 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 196
        }

    # MCTS Simulation Policy Tier #197
    def evaluate_move_policy_channel_197(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 152.5
        cascade_bonus = 1.0 + ((197 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 197
        }

    # MCTS Simulation Policy Tier #198
    def evaluate_move_policy_channel_198(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 165.0
        cascade_bonus = 1.0 + ((198 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 198
        }

    # MCTS Simulation Policy Tier #199
    def evaluate_move_policy_channel_199(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 177.5
        cascade_bonus = 1.0 + ((199 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 199
        }

    # MCTS Simulation Policy Tier #200
    def evaluate_move_policy_channel_200(self, r1: int, c1: int, r2: int, c2: int) -> Dict[str, Any]:
        dist = abs(r1 - r2) + abs(c1 - c2)
        is_legal = (dist == 1)
        base_points = 190.0
        cascade_bonus = 1.0 + ((200 % 6) * 0.2)
        return {
            'legal': is_legal,
            'estimated_score': round(base_points * cascade_bonus),
            'max_allowed_variance': round(base_points * 4.0),
            'rule_channel': 200
        }

    def validate_submission(self, level: int, moves: int, score: int) -> bool:
        max_plausible = moves * 1600 + (level * 800)
        return score <= max_plausible and moves >= 1
