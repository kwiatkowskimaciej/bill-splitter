def find_positive_index(list):
    for i in range(len(list)):
        if list[i] >= 0:
            return i

def count_positives_and_negatives(list):
    postives = 0
    negatives = 0
    for i in list:
        if i >= 0:
            postives += 1
        elif i < 0:
            negatives += 1
    return postives, negatives

def transactions_maker(list):
    transactions = []
    list.sort()
    total = sum(list)
    items = len(list)
    avg = total / items
    diff_list = [i-avg for i in list]
    max_index = find_positive_index(diff_list)
    pos_neg = count_positives_and_negatives(diff_list)

    if not max_index:
        return -1

    for i in range(max_index):
        while diff_list[i] < 0:
            if diff_list[-1] == 0:
                diff_list.pop()
            else:
                if -diff_list[i] > diff_list[-1]:
                    diff_list[i] = diff_list[i] + diff_list[-1]
                    amount = round(diff_list[-1], 2)
                    if amount > 0:
                      transactions.append((i, len(diff_list)-1, amount))
                    diff_list[-1] = 0
                else:
                    diff_list[-1] = diff_list[-1] + diff_list[i]
                    amount = round(diff_list[i], 2)*(-1)
                    if amount > 0:
                      transactions.append((i, len(diff_list)-1, amount))
                    diff_list[i] = 0
    return transactions, len(transactions), pos_neg, len(list)

